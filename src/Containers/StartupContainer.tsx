import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { setDefaultTheme } from '@/Store/Theme'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ActivityIndicator, Text, View } from 'react-native'

const StartupContainer = () => {
  const { Layout, Gutters, Fonts } = useTheme()

  const { t } = useTranslation()

  const init = async () => {
    await setDefaultTheme({ theme: 'default', darkMode: null })
    navigateAndSimpleReset('Main')
  }

  useEffect(() => {
    init()
  })

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Brand />
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
      <Text style={Fonts.textCenter}>{t('welcome')}</Text>
    </View>
  )
}

export default StartupContainer
