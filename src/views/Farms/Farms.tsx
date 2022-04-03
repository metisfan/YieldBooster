import React, { useEffect, useCallback, useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Image, Heading } from '@pancakeswap-libs/uikit'
import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK, CAKE_POOL_PID } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useFarms, usePriceBnbBusd, usePriceCakeBusd } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import FarmTabButtons from './components/FarmTabButtons'
import Divider from './components/Divider'

export interface FarmsProps {
  tokenMode?: boolean
}
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.xl} {
    flex-direction: row;
  }
`
const LeftCol = styled.div`
  width: 100%;
`
const RightCol = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Column = styled.div`
  width: 50%;
  text-align: center;
  font-size: 14px;
  padding: 20px;
`
const CountdownText = styled.span`
  font-size: 12px;
  color: #fff;
  border-radius: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-right: auto;
    margin-bottom: 5px;
  }
`
const CountdownTimeStart = ({ days, hours, minutes, seconds, completed }) => {
  return (
    <CountdownText>
      <Heading as="h2" size="xl" color="#fff" mb="10px">
        APR Reset in
      </Heading>
      <span style={{ fontSize: '15px', paddingTop: '10px', paddingBottom: '5px' }}>
        Days : Hours : Minutes : Seconds
      </span>
    </CountdownText>
  )
}

const Farms: React.FC<FarmsProps> = (farmsProps) => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const farmsLP = useFarms()
  const cakePrice = usePriceCakeBusd()
  const bnbPrice = usePriceBnbBusd()
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const { tokenMode } = farmsProps

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const [stakedOnly, setStakedOnly] = useState(false)

  const activeFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier !== '0X')
  const inactiveFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier === '0X')

  const stakedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )

  // /!\ This function will be removed soon
  // This function compute the APY for each farm and will be replaced when we have a reliable API
  // to retrieve assets prices against USD
  const farmsList = useCallback(
    (farmsToDisplay, removed: boolean) => {
      // const cakePriceVsBNB = new BigNumber(farmsLP.find((farm) => farm.pid === CAKE_POOL_PID)?.tokenPriceVsQuote || 0)
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        // if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
        //   return farm
        // }
        const cakeRewardPerBlock = new BigNumber(farm.eggPerBlock || 1)
          .times(new BigNumber(farm.poolWeight))
          .div(new BigNumber(10).pow(18))
        const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)

        let apy = cakePrice.times(cakeRewardPerYear)

        let totalValue = new BigNumber(farm.lpTotalInQuoteToken || 0)

        if (farm.quoteTokenSymbol === QuoteToken.WAVAX) {
          totalValue = totalValue.times(bnbPrice)
        }

        if (totalValue.comparedTo(0) > 0) {
          apy = apy.div(totalValue)
        }

        return { ...farm, apy }
      })
      return farmsToDisplayWithAPY.map((farm) => (
        <FarmCard
          key={farm.pid}
          farm={farm}
          removed={removed}
          bnbPrice={bnbPrice}
          cakePrice={cakePrice}
          ethereum={ethereum}
          account={account}
        />
      ))
    },
    [bnbPrice, account, cakePrice, ethereum],
  )
  const [countdownDate, setCountdownDate] = useState(1648303200000)

  return (
    <Page>
      <HeaderContainer>
        <LeftCol>
          <Heading as="h1" size="xl" color="success" mb="20px">
            Avax Yield Farm with Auto Liquidity
          </Heading>
          <Heading as="h2" size="lg" color="primary" mb="15px">
            {tokenMode
              ? TranslateString(10002, 'Stake tokens to earn EGG')
              : TranslateString(320, 'Stake LP tokens to earn EGG')}
          </Heading>
          <Heading as="h2" size="lg" color="secondary" mb="15px">
            Transfer Tax sold to provide liquidity to LP Pools
          </Heading>
        </LeftCol>
        <RightCol>
        </RightCol>
      </HeaderContainer>
      <FarmTabButtons stakedOnly={stakedOnly} setStakedOnly={setStakedOnly} />
      <div>
        <Divider />
        <FlexLayout>
          <Route exact path={`${path}`}>
            {stakedOnly ? farmsList(stakedOnlyFarms, false) : farmsList(activeFarms, false)}
          </Route>
          <Route exact path={`${path}/history`}>
            {farmsList(inactiveFarms, true)}
          </Route>
        </FlexLayout>
      </div>
      {/* <Image src="/images/egg/8.png" alt="illustration" width={1352} height={587} responsive /> */}
    </Page>
  )
}

export default Farms
