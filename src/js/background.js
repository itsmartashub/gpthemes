console.log('background.js')

import browser from 'webextension-polyfill'
import { handleUpdateAvailable, browserUpdateNotification } from './background/handleUpdateAvailable'

/* ? onUpdateAvailable - Manifest v3 only and it needs "management" permission to work !!*/
// browser.runtime.onUpdateAvailable.addListener(handleUpdateAvailable) //

browser.runtime.onInstalled.addListener((details) => {
	if (details.reason === 'update') {
		handleUpdateAvailable(details)
	}
})
browserUpdateNotification()
