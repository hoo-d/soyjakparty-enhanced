// ==UserScript==
// @name        SPE
// @version     3.0.2
// @namespace   SPE
// @description SPE as a userscript or something
// @license     SoyGPL; https://soystudios.serv00.net/soygnu/SOYGPL.txt
// @match       *://*.soyjak.st/*
// @match       *://*.soyjak.party/*
// @match       *://soyjakwiki.org/*
// @connect     soybooru.com
// @connect     raw.githubusercontent.com
// @connect		*
// @grant       GM_xmlhttpRequest
// @grant       GM_download
// @run-at      document-end
// @updateURL   https://github.com/hoo-d/soyjakparty-enhanced/blob/main/soyjakparty-enhanced.user.js?raw=true
// @downloadURL https://github.com/hoo-d/soyjakparty-enhanced/blob/main/soyjakparty-enhanced.user.js?raw=true
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAAd0SU1FB+kFEBYIKfem9aMAAAfWSURBVFjDnZhpbFTXFcd/b96bzTPjFS8Y4wW8sMeAIRACNJTSQElK0ygRoqiUqiltlH6oKrUVUpt0Uaq0H7qXSICrLiSQkCY0hBAgmBaMY2NjG9sYL4AdL3hhPJ4Zezzr6QdPzAwzYOj/fXk6997//557zz33vKfwILAmLp+7sWCl1Qpagt6oCIpzrOtyf21/g6eDEYL3HqpMS663PLJuz+bNZRm5mgnQoQPAx6D0TLQOt7Rdqmh9f7yJwANNNRIGSE7btOY3P+tskoDER0DsciH4SvuyH5GZ/DDkCehSc3c+/+5Be4OMy3QYl5Perx5WSh5gPaZgeuzVQ+M9Eoyg8cqQDMiwjEsoRiIkDaHvVedsQ383kRqP/QWubtjzyu6U5IgpCZXUYucajfTgR08IIUiQIIKOLKVslmV9H4PNem/o/gI/4K+P7/j1t4vT7rJbWMx8iphFkHau004XnXTSThfpmLBQastZM5re1pDpHLv/7m7af2WaVQ/ImDjEHn6GxRe2B+VC4Km/kW6+r0DKd86O3oM4JD7xiEcmonYnusdx79K9aJ+RaXezL6BzUVFxwj3V2+hAwYueMrJih6PwhGHrrvrjM+v74u/BkOWLP3nx8Yx7CtjIIY9c3NRxDS8qKgGcOPFgRAfoMac0jrSeIxTHg1Ts2atWz70nvYKZyfVdx0q66KQVM+DHgo0VaAgKi5W1W6pfT+gajxXIIpA1O1XP9FAwM48SJvACRgwoKIRQAAulBWkL87tqYwXmMZaXYYlHKIzSzTgKICRQjCnKo0mE8OBHT7GtYHHVB1qswDumJz9fZIxHf5kqZpKDCoRoppaVzA8nvqn9o4IAJlx4FH2SpiB3CegI2RbOy44z/ytUsoX8KcIltOHGg4opolcPKazAgJN3CK4i29rrjqZRIfPH1bHJzSX7pSNOzLfJYXFOHbE2uTF14Hzyrn/R9wWifUyCJGtqbGyrbCA/jl+5qJyajEY6OIE2lev0rNKWrFWsSvQSpTBmnWGJjSEzBYAQwot/ymrEyEZq8GME+llHTsSYZAqLSLW6owSMGI1GDa5zjnEUZpJDOumY0QEt/BMHgXAcBTFRwCYewwAIKzAg+KYm4MVtwhiM9kBDM+g1N69ipggvFbjwYWEWyQQ4TwrPoKGhkoBGL1XsZRdP40HDjJdD1OJHB4QIUZfFCkt7lMAw9pFh12jyOD+kEMHHBA6uchPBiLAOB80YuEgxO9nElzjB7zmPC43llHKUjeTSR4Bi0njLcvkbQxVRAiNgH3IEZntooBAFI0aSyAsfoVvoGOBJPuE0H1HBTp5hCQ5sbOc2p3kbO07KuchSvkwO7/cHVAqjomgCbtdecvMSBiJvpc8Om54V1HADPXqMdNOHUMBuVrKZX7KW2axlkEGERPy47Axg06IpHvVUH61/dodN4tzfgsJarMxkOQkYmEEZfZiZzCwmZnGJRmajUYKKgsmELSZVtDLaXN+5rTQ2HSmo1LGAEpZGWG8h4SgK4Gc1L7CdDowkoPK5OQesA+pdAqPQW1/ZU1oyZQkQQo+Cwlb+wcukMZvk8LzGqGEOCYCfD3HSxgnAQCZn6KNJUY2oMcd2k7/xTNXXihJ12DFioYFz7CIVWMoi+mijFxdeFAQTO1iGHtDRxxzGqWKCLnSkMgMry0b6OmOWQg/JG480ikitlMtJ+aY8L8PTll4iH8ufZVwC4pXbMiBuOSeN8lozc2OuzBBLJ+o/TUlf3T6zVa693f6fhC1JZVE5Mz6yaOM6JRgwY8GAj2O0DDa8Eb+37pHE61axiOWIZebelwKNcecclBHpj6haXbJPjoXfHdIrf5Si/5KpiysQanDOcStjythz0t9Sc1uL26mZv1AZUVRbmctw+L2HU/hwd+CML3AnNueyYDDYgz1O4yBpbMXACMOEgFHqWRVuK8TE4aH+9/Cq0wgMEZA887xSUmIabVTTSybV9JJHA6fRswkdfi7SjTf47zft+/Hc3wNB+MTxwa0JFyMRxm7OMUI6XyePXjJZjEoiGmtRmfxEUXizp2OfbSROZXcXDJSR/VF3QvGLlIVNTk5SjIkgN7nIABoeZpNBITM4xyLScFEbrKmjy8U9yvcojOGaWGZNXW4qChvcjLIBlb9Tjp88Mgigo50ztKKngyX08Nuqjl+FbhCY3oMgw7QzWNdZX/qomgqADgc+rvJzfOiYQMFEARMMcpo/YWGMS3L1+KmzTwDTC0zi9PjR11/NL9oOQCIGRrhCT8T93A1AEj4yqODkoKflC+EW3QPQG2mipuvKQfdpfIDGKpLxIzEdzRSxlBa8N6kMPIRAJg5yGTzbtC80GUu5WChhRkzHdcznFld9TU0Rzk0LhWT0WEljx7KBI1IbTgbOwFNjSOSTIxVSJ18RaxPLHpw+Es9pH+f3HRCZ/MoMfeidFUFvkl9It/xUEq6yh8w7g6YP0zueOEI9jkvZ6zFq2NAp+aqDCwigUsB3+Rbl/K7X+QcO4Ph/BMBNO0PDuXUlNvVT0rGRzTBGFrGbl9lGLwfdV/7FMboj9/9hBEBwOiYcc+dntasmLCRTyhrWsIIkdLwWeKOOQ5yNLkgeTgDALidbs9pLXGqABnxkU04zb1Hleq/ceYBK3NHx+xB/F6ag8ay6PqswLdedtjCYoZzXipWaxKHm4NN0x5ZT/wOGK0vY/lrMjQAAAABJRU5ErkJggg==
// ==/UserScript==

(function () {
	if (window.top !== window.self) return; // @noframes isn't the best

	// MAIN FUNCTIONS O ALGO
	// hoo-d release
	//spaghetti code

	const audio = new Audio();
	audio.preload = "auto";
	audio.crossOrigin = "anonymous";
	audio.volume = 0.5;

	function getActiveThemeCSS() {
		const themeLink = [...document.querySelectorAll('link[rel="stylesheet"]')]
			.find(link => link.href.includes('/stylesheets/') && !link.href.includes('font-awesome'));
		return themeLink?.href;
	}

	async function applyActiveTheme(extensionRoot) {
		const isTransparent = localStorage.getItem('transparencyDisabled') !== 'true';
		if (!isTransparent) {
			const themeCSS = getActiveThemeCSS();
			if (!themeCSS) return;

			const response = await fetch(themeCSS);
			let cssText = await response.text();

			const boardStyles = getComputedStyle(document.body);
			const baseFont = boardStyles.font;

			const style = document.createElement('style');
			style.textContent = `
      :host {
        all: initial;
        font: ${baseFont} !important;
        color: inherit;
      }

      * {
        font: inherit !important;
        font-family: inherit !important;
        font-size: inherit !important;
        font-weight: inherit !important;
      }

      ${cssText}
`;

			extensionRoot.shadowRoot.appendChild(style);
		} else {
			if (typeof updateTransparencyEffects !== 'undefined') {
				updateTransparencyEffects();
			}
		}
	}

	function extUrlFor(pathInsideExt) {
		return `https://github.com/hoo-d/soyjakparty-enhanced/blob/main/${pathInsideExt}?raw=true`;
	}

	function createSEClockMenu() {
		const TIMEZONES = [
			{
				label: 'AMERIMUTTS',
				zone: 'America/New_York',
				statusId: 'status-us',
				clockId: 'clock-us',
				icon: 'icons/timezonejaks/amerimutt.png',
			},
			{
				label: 'LATINXGODS',
				zone: 'America/Sao_Paulo',
				statusId: 'status-sa',
				clockId: 'clock-sa',
				icon: 'icons/timezonejaks/mexiaryan.png',
			},
			{
				label: 'AFRICABVLLS',
				zone: 'Africa/Lagos',
				statusId: 'status-af',
				clockId: 'clock-af',
				icon: 'icons/timezonejaks/africanbvll.png',
			},
			{
				label: 'EUROMUTTS',
				zone: 'Europe/Berlin',
				statusId: 'status-eu',
				clockId: 'clock-eu',
				icon: 'icons/timezonejaks/euromutt.png',
			},
			{
				label: 'PAJEETS',
				zone: 'Asia/Kolkata',
				statusId: 'status-ca',
				clockId: 'clock-ca',
				icon: 'icons/timezonejaks/canadiansupersoldier.png',
			},
			{
				label: 'ASIANS',
				zone: 'Asia/Shanghai',
				statusId: 'status-as',
				clockId: 'clock-as',
				icon: 'icons/timezonejaks/asiaimpish.png',
			},
			{
				label: 'AUSTRALIARYANS',
				zone: 'Australia/Sydney',
				statusId: 'status-au',
				clockId: 'clock-au',
				icon: 'icons/timezonejaks/australiaimpish.png',
			},
		];

		const extensionHost = document.createElement('div');
		extensionHost.id = 'spe-extension';
		document.body.appendChild(extensionHost);

		const shadowRoot = extensionHost.attachShadow({ mode: 'open' });

		const getActivityStatus = (hour) => {
			if (hour >= 0 && hour < 6) return 'Sleeping';
			if (hour >= 6 && hour < 10) return 'Partially Inactive';
			if (hour >= 10 && hour < 18) return 'Mostly Active';
			if (hour >= 18 && hour < 23) return 'Fully Active';
			return 'Winding Down';
		};

		const toggleBtn = document.createElement('button');
		toggleBtn.textContent = '▼ SPE Menu';
		toggleBtn.style.position = 'fixed';
		toggleBtn.style.top = '25px';
		toggleBtn.style.right = '10px';
		toggleBtn.style.zIndex = '9999';
		toggleBtn.style.padding = '6px 8px';

		toggleBtn.style.borderRadius = '5px';
		toggleBtn.style.cursor = 'pointer';
		toggleBtn.style.fontSize = '12px';

		document.body.appendChild(toggleBtn);

		const menuBox = document.createElement('div');
		menuBox.style.position = 'fixed';
		menuBox.style.top = '60px';
		menuBox.style.right = '10px';
		menuBox.style.zIndex = '100000';
		menuBox.style.backdropFilter = 'blur(20px)';
		menuBox.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
		menuBox.style.WebkitBackdropFilter = 'blur(10px)'
		menuBox.style.borderRadius = '6px';
		menuBox.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
		menuBox.style.padding = '10px 15px';

		menuBox.style.fontSize = '13px';
		menuBox.style.zIndex = '9999';
		menuBox.style.minWidth = '230px';
		menuBox.style.display = 'none';
		menuBox.style.maxHeight = '80vh';
		menuBox.style.overflowY = 'auto';

		const clocksSection = document.createElement('div');
		clocksSection.id = 'clocks-section';

		const clocksHeader = document.createElement('div');
		clocksHeader.style.display = 'flex';
		clocksHeader.style.justifyContent = 'space-between';
		clocksHeader.style.alignItems = 'center';
		clocksHeader.style.marginBottom = '10px';

		const clocksTitle = document.createElement('div');
		clocksTitle.textContent = 'Timezones';
		clocksTitle.style.fontWeight = 'bold';

		const soundToggle = document.createElement('button');
		soundToggle.textContent = localStorage.getItem('notifEnabled') === 'true' ? '🔊' : '🔇';
		soundToggle.title = 'Toggle notification sounds';
		soundToggle.style.padding = '4px 8px';
		soundToggle.style.borderRadius = '4px';
		soundToggle.style.cursor = 'pointer';
		soundToggle.style.fontSize = '14px';

		const transparencyToggle = document.createElement('button');
		transparencyToggle.textContent = localStorage.getItem('transparencyDisabled') === 'true' ? '◼' : '◻';
		transparencyToggle.title = 'Toggle transparency effects';
		transparencyToggle.style.padding = '4px 8px';
		transparencyToggle.style.borderRadius = '4px';
		transparencyToggle.style.cursor = 'pointer';
		transparencyToggle.style.fontSize = '14px';
		transparencyToggle.style.marginLeft = '8px';

		const searchmodeToggle = document.createElement('button');
		searchmodeToggle.textContent = localStorage.getItem('soybooruDirectSearch') === 'true' ? '🌐' : '🔍';
		searchmodeToggle.title = 'Toggle Soybooru Search mode';
		searchmodeToggle.style.padding = '4px 8px';
		searchmodeToggle.style.borderRadius = '4px';
		searchmodeToggle.style.cursor = 'pointer';
		searchmodeToggle.style.fontSize = '14px';
		searchmodeToggle.style.marginLeft = '8px';

		clocksHeader.appendChild(clocksTitle);

		clocksSection.insertBefore(clocksHeader, clocksSection.firstChild);

		const settingsContainer = document.createElement('div');
		settingsContainer.id = 'settings-container';
		settingsContainer.style.display = 'none';

		const expandBtn = document.createElement('button');
		expandBtn.textContent = '▼ Expand Settings ⚙';
		expandBtn.style.width = '100%';
		expandBtn.style.marginTop = '10px';
		expandBtn.style.padding = '4px 0';
		expandBtn.style.background = 'none';
		expandBtn.style.border = 'none';

		expandBtn.style.cursor = 'pointer';
		expandBtn.style.textAlign = 'right';
		expandBtn.style.fontSize = '12px';

		TIMEZONES.forEach(({ label, clockId, statusId, icon }) => {
			const row = document.createElement('div');
			row.style.display = 'flex';
			row.style.alignItems = 'center';
			row.style.marginBottom = '8px';

			const img = document.createElement('img');
			img.src = extUrlFor(icon);
			img.alt = '';
			img.style.width = '25px';
			img.style.height = '25px';
			img.style.marginRight = '6px';
			img.style.objectFit = 'contain';
			img.style.flexShrink = '0';

			const textContainer = document.createElement('div');
			textContainer.innerHTML = `
        <strong>${label}:</strong> <span id="${clockId}">--:--:--</span><br>
        <span id="${statusId}" style="font-size: 12px;">Checking...</span>
      `;

			row.appendChild(img);
			row.appendChild(textContainer);
			clocksSection.appendChild(row);
		});

		const topControls = document.createElement('div');
		topControls.style.display = 'flex';
		topControls.style.justifyContent = 'flex-end';
		topControls.style.alignItems = 'center';
		topControls.style.marginBottom = '10px';

		topControls.appendChild(soundToggle);
		topControls.appendChild(transparencyToggle);
		topControls.appendChild(searchmodeToggle);

		const settingsDivider = document.createElement('hr');
		settingsDivider.style.marginTop = '10px';

		menuBox.appendChild(topControls);
		menuBox.appendChild(settingsDivider);

		const settingsHeader = document.createElement('div');
		settingsHeader.style.display = 'flex';
		settingsHeader.style.alignItems = 'center';
		settingsHeader.style.gap = '250px';

		const updateBtn = document.createElement('button');
		updateBtn.textContent = 'Updates/About SPE';
		updateBtn.title = 'Check for new versions';
		updateBtn.style.padding = '4px 8px';
		updateBtn.style.cursor = 'pointer';
		updateBtn.style.borderRadius = '4px';
		updateBtn.style.fontSize = '10px';
		updateBtn.style.marginTop = '3px';
		updateBtn.style.fontWeight = 'bold';
		updateBtn.style.whiteSpace = 'nowrap';

		updateBtn.addEventListener('click', () => {
			updatePopup.style.display = 'block';
		});

		const settingsTitle = document.createElement('div');
		settingsTitle.textContent = 'Settings';
		settingsTitle.style.fontWeight = 'bold';

		const notifLabel = document.createElement('label');
		notifLabel.textContent = ' Enable Notifications';
		notifLabel.style.display = 'block';
		notifLabel.style.marginTop = '10px';

		const notifCheckbox = document.createElement('input');
		notifCheckbox.type = 'checkbox';
		notifCheckbox.id = 'notif-toggle';

		settingsHeader.appendChild(settingsTitle);
		settingsHeader.appendChild(updateBtn);

		settingsContainer.appendChild(settingsHeader);
		notifLabel.prepend(notifCheckbox);
		settingsContainer.appendChild(notifLabel);

		notifCheckbox.checked = localStorage.getItem('notifEnabled') === 'true';

		notifCheckbox.addEventListener('change', () => {
			localStorage.setItem('notifEnabled', notifCheckbox.checked);

			soundToggle.textContent = notifCheckbox.checked ? '🔊' : '🔇';
		});
		soundToggle.addEventListener('click', () => {
			notifCheckbox.checked = !notifCheckbox.checked;
			localStorage.setItem('notifEnabled', notifCheckbox.checked);
			soundToggle.textContent = notifCheckbox.checked ? '🔊' : '🔇';

			notifCheckbox.dispatchEvent(new Event('change'));
		});
		transparencyToggle.addEventListener('click', () => {
			transparencyCheckbox.checked = !transparencyCheckbox.checked;
			localStorage.setItem('transparencyDisabled', transparencyCheckbox.checked);
			transparencyToggle.textContent = transparencyCheckbox.checked ? '◼' : '◻';
			transparencyCheckbox.dispatchEvent(new Event('change'));
		});

		const soundSelectLabel = document.createElement('label');
		soundSelectLabel.textContent = 'Select Sound:';
		soundSelectLabel.style.display = 'block';
		soundSelectLabel.style.marginTop = '10px';
		settingsContainer.appendChild(soundSelectLabel);

		const soundSelect = document.createElement('select');
		soundSelect.id = 'notif-sound-select';
		['imrcv.mp3', 'cobgang.mp3', 'doit.mp3', "'cord.mp3", 'yougotmail.mp3'].forEach(name => {
			const opt = document.createElement('option');
			opt.value = name;
			opt.textContent = name;
			soundSelect.appendChild(opt);
		});
		settingsContainer.appendChild(soundSelect);

		const customSoundWrapper = document.createElement('div');
		customSoundWrapper.style.display = 'flex';
		customSoundWrapper.style.alignItems = 'center';
		customSoundWrapper.style.gap = '6px';
		customSoundWrapper.style.marginTop = '10px';

		const customSoundLabel = document.createElement('label');
		customSoundLabel.textContent = 'Use custom sound:';
		customSoundLabel.style.flex = '1';

		const customSoundInput = document.createElement('input');
		customSoundInput.type = 'text';
		customSoundInput.style.flex = '2';

		customSoundWrapper.appendChild(customSoundLabel);
		customSoundWrapper.appendChild(customSoundInput);
		settingsContainer.appendChild(customSoundWrapper);

		const settingsDivider2 = document.createElement('hr');
		settingsContainer.appendChild(settingsDivider2);

		const transparencyLabel = document.createElement('label');
		transparencyLabel.textContent = ' Use basic theme and disable effects';
		transparencyLabel.style.display = 'block';
		transparencyLabel.style.marginTop = '10px';

		const transparencyCheckbox = document.createElement('input');
		transparencyCheckbox.type = 'checkbox';
		transparencyCheckbox.id = 'transparency-toggle';

		transparencyLabel.prepend(transparencyCheckbox);
		settingsContainer.appendChild(transparencyLabel);

		transparencyCheckbox.checked = localStorage.getItem('transparencyDisabled') === 'true';
		if (typeof updateTransparencyEffects !== 'undefined') {
			updateTransparencyEffects();
		}

		transparencyCheckbox.addEventListener('change', () => {
			localStorage.setItem('transparencyDisabled', transparencyCheckbox.checked);
			if (typeof updateTransparencyEffects !== 'undefined') {
				updateTransparencyEffects();
			}
			document.dispatchEvent(new CustomEvent('transparencyChanged', {
				detail: { isTransparent: !transparencyCheckbox.checked }
			}));
		});
		document.addEventListener('transparencyChanged', (e) => {
			transparencyCheckbox.checked = !e.detail.isTransparent;
			if (typeof updateTransparencyEffects !== 'undefined') {
				updateTransparencyEffects();
			}
		});

		const rusearchModeLabel = document.createElement('label');
		rusearchModeLabel.textContent = ' Simplify Soybooru Search features';
		rusearchModeLabel.style.display = 'block';
		rusearchModeLabel.style.marginTop = '10px';

		const rusearchModeCheckbox = document.createElement('input');
		rusearchModeCheckbox.type = 'checkbox';
		rusearchModeCheckbox.id = 'searchmode-toggle';

		rusearchModeLabel.prepend(rusearchModeCheckbox);
		settingsContainer.appendChild(rusearchModeLabel);

		rusearchModeCheckbox.checked = localStorage.getItem('soybooruDirectSearch') === 'true';

		rusearchModeCheckbox.addEventListener('change', () => {
			localStorage.setItem('soybooruDirectSearch', rusearchModeCheckbox.checked);

			searchmodeToggle.textContent = rusearchModeCheckbox.checked ? '🌐' : '🔍';
		});
		searchmodeToggle.addEventListener('click', () => {
			rusearchModeCheckbox.checked = !rusearchModeCheckbox.checked;
			localStorage.setItem('soybooruDirectSearch', rusearchModeCheckbox.checked);
			searchmodeToggle.textContent = rusearchModeCheckbox.checked ? '🌐' : '🔍';
			rusearchModeCheckbox.dispatchEvent(new Event('change'));
		});

		const previewcountMode = document.createElement('label');
		previewcountMode.textContent = 'Select preview / character counter mode:';
		previewcountMode.style.display = 'block';
		previewcountMode.style.marginTop = '10px';
		function createLPDropdown(container) {
			const MODE_FLAGS = {
				nothing: { lp_attach: 'false', lp_enableCounter: 'false', lp_enablePreview: 'false' },
				counter: { lp_attach: 'true', lp_enableCounter: 'true', lp_enablePreview: 'false' },
				preview: { lp_attach: 'true', lp_enableCounter: 'false', lp_enablePreview: 'true' },
				both: { lp_attach: 'true', lp_enableCounter: 'true', lp_enablePreview: 'true' }
			};

			const root = typeof container === 'string' ? document.querySelector(container) : (container || document.body);
			if (!root) throw new Error('createLPDropdown: container not found');

			const EXISTING_ID = 'lp-mode-select';
			const prev = document.getElementById(EXISTING_ID);
			if (prev && prev.parentNode) prev.parentNode.removeChild(prev);

			const select = document.createElement('select');
			select.id = EXISTING_ID;

			[['nothing', 'Nothing'], ['counter', 'Only counter'], ['preview', 'Only preview'], ['both', 'Both']].forEach(([v, t]) => {
				const opt = document.createElement('option');
				opt.value = v;
				opt.textContent = t;
				select.appendChild(opt);
			});

			function currentMode() {
				if (localStorage.getItem('lp_attach') === 'false') return 'nothing';
				const c = localStorage.getItem('lp_enableCounter') === 'true';
				const p = localStorage.getItem('lp_enablePreview') === 'true';
				if (c && p) return 'both';
				if (c && !p) return 'counter';
				if (p && !c) return 'preview';
				return 'nothing';
			}

			function writeFlags(flags) {
				Object.keys(flags).forEach(k => localStorage.setItem(k, String(flags[k])));
				try { if (window.livePreview && typeof window.livePreview.setFlags === 'function') window.livePreview.setFlags(flags); } catch (e) { }
				try { document.dispatchEvent(new CustomEvent('livePreview:flagsChanged', { detail: flags })); } catch (e) { }
			}

			select.value = currentMode();

			select.addEventListener('change', () => {
				const flags = MODE_FLAGS[select.value] || MODE_FLAGS.nothing;
				writeFlags(flags);
			});

			root.appendChild(select);
			return select;
		}
		settingsContainer.appendChild(previewcountMode)
		createLPDropdown(settingsContainer);

		function updateTransparencyEffects() {
			const isDisabled = transparencyCheckbox.checked;

			if (isDisabled) {
				menuBox.style.backdropFilter = 'none';
				menuBox.style.WebkitBackdropFilter = 'none';
				menuBox.style.backgroundColor = '#ffffff';
				menuBox.style.fontFamily = 'monospace';
				menuBox.style.color = '#000000';

				document.querySelectorAll('#spe-extension button').forEach(btn => {
					btn.style.backdropFilter = 'none';
					btn.style.backgroundColor = '#f0f0f0';
					btn.style.fontFamily = 'monospace';
					btn.style.color = '#000000';
				});
			} else {
				menuBox.style.backdropFilter = 'blur(20px)';
				menuBox.style.WebkitBackdropFilter = 'blur(10px)';
				menuBox.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
				menuBox.style.fontFamily = '';
				menuBox.style.color = '';

				document.querySelectorAll('#spe-extension button').forEach(btn => {
					btn.style.backdropFilter = 'blur(20px)';
					btn.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
					btn.style.fontFamily = '';
					btn.style.color = '';
				});
			}
		}

		const settingsDivider3 = document.createElement('hr');
		settingsContainer.appendChild(settingsDivider3);

		const customBGLabel = document.createElement('label');
		customBGLabel.textContent = 'Upload custom background:';
		customBGLabel.style.flex = '1';

		const customBGInput = document.createElement('input');
		customBGInput.type = 'file';
		customBGInput.accept = 'image/*';
		customBGInput.style.flex = '2';

		const clearBGBtn = document.createElement('button');
		clearBGBtn.textContent = '🗑️';
		clearBGBtn.title = 'Remove custom sound';
		clearBGBtn.style.padding = '4px 8px';
		clearBGBtn.style.cursor = 'pointer';

		clearBGBtn.style.borderRadius = '4px';

		settingsContainer.appendChild(customBGLabel);
		settingsContainer.appendChild(customBGInput);
		settingsContainer.appendChild(clearBGBtn);

		customBGInput.addEventListener('change', e => {
			const file = e.target.files[0];
			if (file) {
				const reader = new FileReader();
				reader.onload = function (ev) {
					const imageUrl = ev.target.result;

					document.body.style.backgroundImage = `url(${imageUrl})`;
					document.body.style.backgroundSize = 'cover';
					document.body.style.backgroundPosition = 'center center';
					document.body.style.backgroundAttachment = 'fixed';

					localStorage.setItem('userBackground', imageUrl);
				};
				reader.readAsDataURL(file);
			}
		});

		clearBGBtn.addEventListener('click', () => {
			document.body.style.backgroundImage = '';
			document.body.style.backgroundSize = '';
			document.body.style.backgroundPosition = '';
			document.body.style.backgroundAttachment = '';

			localStorage.removeItem('userBackground');
			alert('(You) removed a custom background. Reverted to default.');
		});

		soundSelect.id = 'notif-sound-select';

		let customSoundURL = localStorage.getItem('customSound') || null;
		customSoundInput.value = customSoundURL || '';
		const savedSound = localStorage.getItem('selectedSound') || 'imrcv.mp3';
		soundSelect.value = savedSound;

		let currentBlobUrl = null;
		function updateAudioSrc() {
			if (currentBlobUrl) URL.revokeObjectURL(currentBlobUrl);
			GM_xmlhttpRequest({
				method: "GET",
				url: customSoundURL ? customSoundURL : `https://raw.githubusercontent.com/hoo-d/soyjakparty-enhanced/refs/heads/main/audio/${soundSelect.value}`,
				responseType: "blob",
				onload: function (res) {
					currentBlobUrl = URL.createObjectURL(res.response);
					audio.src = currentBlobUrl;
				}
			});
		}

		updateAudioSrc();

		soundSelect.addEventListener('change', () => {
			if (!customSoundURL) {
				updateAudioSrc();
			}
			localStorage.setItem('selectedSound', soundSelect.value);
		});

		customSoundInput.addEventListener('focusout', e => {
			const str = customSoundInput.value;
			localStorage.setItem('customSound', str);
			if (str && str.length !== 0) {
				customSoundURL = str;
				updateAudioSrc();
			}
		});

		soundSelect.addEventListener('change', () => {
			if (!customSoundURL) {
				updateAudioSrc();
			}
		});

		const settingsDivider4 = document.createElement('hr');
		settingsContainer.appendChild(settingsDivider4);

		const customLinkLabel = document.createElement('label');
		customLinkLabel.textContent = 'Add custom header boardlist link:';
		customLinkLabel.style.display = 'block';
		customLinkLabel.style.marginTop = '10px';
		settingsContainer.appendChild(customLinkLabel);

		const customLinkInput = document.createElement('input');
		customLinkInput.type = 'text';
		customLinkInput.placeholder = 'e.g. gem';
		customLinkInput.style.width = '70%';
		customLinkInput.style.marginRight = '5px';
		settingsContainer.appendChild(customLinkInput);

		const addLinkBtn = document.createElement('button');
		addLinkBtn.textContent = 'Add';
		addLinkBtn.style.padding = '4px 8px';
		addLinkBtn.style.cursor = 'pointer';

		addLinkBtn.style.borderRadius = '4px';
		settingsContainer.appendChild(addLinkBtn);

		const clearLinksBtn = document.createElement('button');
		clearLinksBtn.textContent = '🗑️';
		clearLinksBtn.title = 'Clear all custom links';
		clearLinksBtn.style.marginLeft = '8px';
		clearLinksBtn.style.padding = '4px 8px';
		clearLinksBtn.style.cursor = 'pointer';

		clearLinksBtn.style.borderRadius = '4px';
		settingsContainer.appendChild(clearLinksBtn);

		function renderCustomLinks() {
			const boardList = document.querySelector('.boardlist');
			if (!boardList) return;

			boardList.querySelectorAll('.custom-boardlink').forEach(el => el.remove());

			const saved = JSON.parse(localStorage.getItem('customBoardLinks') || '[]');
			if (saved.length === 0) return;

			const customSpan = document.createElement('span');
			customSpan.className = 'sub custom-boardlink';
			customSpan.innerHTML = '[ ' + saved.map(board => `<a href="https://www.soyjak.st/${board}" title="Custom board">${board}</a>`).join(' / ') + ' ]';


			const searchwiki = document.createElement("input");
			searchwiki.type = "text";
			searchwiki.placeholder = "Soyjak Wiki search...";
			searchwiki.style.width = "120px";
			searchwiki.style.padding = "2px";
			searchwiki.style.fontSize = "10px"

			boardList.appendChild(customSpan);
			boardList.appendChild(searchwiki);

			searchwiki.addEventListener("keydown", (event) => {
				if (event.key === "Enter") {
					const query = searchwiki.value.trim();
					if (query) {
						const url = "https://soyjakwiki.org/index.php?search=" + encodeURIComponent(query);
						window.open(url, "_blank");
					}
				}
			});
		}

		addLinkBtn.addEventListener('click', () => {
			const val = customLinkInput.value.trim();
			if (!val || /[^a-z0-9]/i.test(val)) {
				alert('Invalid board name.');
				return;
			}
			const saved = JSON.parse(localStorage.getItem('customBoardLinks') || '[]');
			if (!saved.includes(val)) {
				saved.push(val);
				localStorage.setItem('customBoardLinks', JSON.stringify(saved));
				renderCustomLinks();
				customLinkInput.value = '';
			}
		});

		clearLinksBtn.addEventListener('click', () => {
			if (confirm('Do you really want to remove your custom links saar?')) {
				localStorage.removeItem('customBoardLinks');
				renderCustomLinks();
			}
		});

		renderCustomLinks();
		document.body.appendChild(menuBox);

		window.addEventListener('load', () => {
			const savedBackground = localStorage.getItem('userBackground');
			if (savedBackground) {
				document.body.style.backgroundImage = `url(${savedBackground})`;
				document.body.style.backgroundSize = 'cover';
				document.body.style.backgroundPosition = 'center center';
				document.body.style.backgroundAttachment = 'fixed';
			}
		});

		toggleBtn.addEventListener('click', () => {
			const isOpening = menuBox.style.display === 'none';
			menuBox.style.display = isOpening ? 'block' : 'none';
			toggleBtn.textContent = !isOpening ? '▼ SPE Menu' : '▲ SPE Menu';
		});

		function updateClocks() {
			TIMEZONES.forEach(({ zone, clockId, statusId }) => {
				const now = new Date().toLocaleString('en-US', { timeZone: zone });
				const date = new Date(now);
				const timeStr = date.toTimeString().split(' ')[0];
				const hour = date.getHours();

				const clockEl = document.getElementById(clockId);
				const statusEl = document.getElementById(statusId);

				if (clockEl) clockEl.textContent = timeStr;
				if (statusEl) statusEl.textContent = getActivityStatus(hour);
			});
		}

		updateClocks();
		setInterval(updateClocks, 1000);

		const refreshNote = document.createElement('div');
		refreshNote.textContent = 'Some changes can require a refresh to fully apply o algx';
		refreshNote.style.fontSize = '11px';

		refreshNote.style.marginTop = '10px';
		refreshNote.style.fontStyle = 'italic';

		expandBtn.addEventListener('click', () => {
			const isHidden = settingsContainer.style.display === 'none';
			settingsContainer.style.display = isHidden ? 'block' : 'none';
			expandBtn.textContent = isHidden ? '▲ Collapse Settings ⚙' : '▼ Expand Settings ⚙';
		});

		settingsContainer.appendChild(refreshNote);
		menuBox.appendChild(clocksSection);
		menuBox.appendChild(expandBtn);
		menuBox.appendChild(settingsContainer);

		applyActiveTheme(extensionHost);

		new MutationObserver(() => applyActiveTheme(extensionHost))
			.observe(document.head, { childList: true });
	}

	createSEClockMenu();

	const capcodes = document.querySelectorAll('.capcode');

	const badgeSources = {
		'## Admin': extUrlFor('icons/admin-gemjak.png'),
		'## Mod': extUrlFor('icons/janny-badge.png'),
		'## Unused': extUrlFor('icons/approver-oalgo.png'),
	};

	capcodes.forEach(capcode => {
		const text = capcode.innerText.trim();

		if (badgeSources[text]) {
			const badge = document.createElement('img');
			badge.src = badgeSources[text];
			badge.alt = `${text} Badge`;
			badge.classList.add('badge');

			badge.style.width = '20px';
			badge.style.height = '20px';
			badge.style.marginLeft = '5px';
			badge.style.verticalAlign = 'middle';

			capcode.appendChild(badge);
		}
	});

	let lastCount = 0;
	let userInteracted = false;
	['click', 'keydown', 'scroll'].forEach(evt =>
		window.addEventListener(evt, () => userInteracted = true, { once: true }));
	function getTitleCount() {
		const match = document.title.match(/^\((\d+)\)/);
		return match ? parseInt(match[1], 10) : 0;
	}
	setInterval(() => {
		const currentCount = getTitleCount();
		const notifEnabled = localStorage.getItem('notifEnabled') === 'true';
		if (
			notifEnabled &&
			currentCount > lastCount &&
			userInteracted &&
			document.hidden
		) {
			audio.play().catch(e => { });
		}
		lastCount = currentCount;
	}, 1000);

	const enhancedButtons = new WeakSet();

	const buttonConfigs = [
		{ type: 'default', symbol: '>', color: '#789922', title: 'Quote (>)' },
		{ type: 'angle', symbol: '<', color: '#f6750b', title: 'Quote (<)' },
		{ type: 'caret', symbol: '^', color: '#6f7de4', title: 'Quote (^)' },
		{ type: 'unquote', symbol: '×', color: '#ff6b6b', title: 'Unquote' }
	];

	function createSymbolButton(config) {
		const button = document.createElement('a');
		button.className = 'enhanced-quote';
		button.href = 'javascript:void(0);';
		button.title = config.title;
		button.dataset.quoteType = config.type;
		button.textContent = config.symbol;

		button.style.color = config.color;
		button.style.textDecoration = 'none';
		button.style.fontWeight = 'normal';
		button.style.padding = '0';
		button.style.margin = '0';
		button.style.background = 'none';
		button.style.border = 'none';
		button.style.cursor = 'pointer';

		return button;
	}

	function createButtonGroup(originalButton) {
		const group = document.createElement('span');
		group.className = 'enhanced-quote-group';
		group.style.marginLeft = '4px';
		group.style.letterSpacing = '-0.05em';
		buttonConfigs.forEach(config => {
			const button = createSymbolButton(config);
			button.addEventListener('click', handleQuoteClick);
			group.appendChild(button);


			if (config !== buttonConfigs[buttonConfigs.length - 1]) {
				group.appendChild(document.createTextNode(' '));
			}
		});

		return group;
	}
	function handleQuoteClick(event) {
		event.preventDefault();
		const button = event.currentTarget;

		if (typeof jQuery !== 'undefined') {
			jQuery(window).trigger('cite', [0, false]);
		}

		const post = button.closest('.post');
		if (!post) return;

		const body = post.querySelector('.body');
		if (!body) return;

		let originalText = body.innerText;
		let text = '';

		switch (button.dataset.quoteType) {
			case 'angle':
				text = "<" + originalText.split("\n").join("\n<");
				break;
			case 'caret':
				text = "^" + originalText.split("\n").join("\n^");
				break;
			case 'unquote':
				text = originalText.replace(/^[><^\s]+/gm, '');
				break;
			default:
				text = ">" + originalText.split("\n").join("\n>");
		}

		var textareas = document.getElementsByName("body");
		var scrollX = window.scrollX || window.pageXOffset;
		var scrollY = window.scrollY || window.pageYOffset;

		for (var i = 0; i < textareas.length; i++) {
			textareas[i].value = text;
			if (i + 1 == textareas.length) {
				if (typeof jQuery !== 'undefined') {
					jQuery(textareas[i]).trigger('focus');
				} else {
					textareas[i].focus();
				}
			}
		}

		window.scrollTo(scrollX, scrollY);
	}

	function enhanceQuoteButton(originalButton) {
		if (enhancedButtons.has(originalButton)) return;

		try {
			const buttonGroup = createButtonGroup(originalButton);
			originalButton.replaceWith(buttonGroup);
			enhancedButtons.add(originalButton);
		} catch (error) {
			console.error('Error enhancing button:', error);
		}
	}

	let processing = false;
	function handleMutations() {
		if (processing) return;
		processing = true;

		setTimeout(() => {
			const quoteButtons = document.querySelectorAll('a.post_quote:not(.enhanced-quote)');
			quoteButtons.forEach(enhanceQuoteButton);
			processing = false;
		}, 100);
	}

	function initExtension() {
		const observer = new MutationObserver(handleMutations);
		observer.observe(document.body, {
			childList: true,
			subtree: true
		});

		handleMutations();
	}

	initExtension();

	window.addEventListener('storage', (event) => {
		if (event.key === 'transparencyDisabled') {
			if (typeof updateTransparencyEffects !== 'undefined') {
				updateTransparencyEffects();
			}
			if (typeof updateAllTransparencyEffects !== 'undefined') {
				updateAllTransparencyEffects();
			}
		}
	});

	const updatePopup = document.createElement('div');
	updatePopup.style.position = 'fixed';
	updatePopup.style.top = '50%';
	updatePopup.style.left = '50%';
	updatePopup.style.transform = 'translate(-50%, -50%)';
	updatePopup.style.zIndex = '100000';
	updatePopup.style.background = 'white';
	updatePopup.style.padding = '30px';
	updatePopup.style.borderRadius = '10px';
	updatePopup.style.boxShadow = '0 0 16px rgba(0,0,0,0.4)';
	updatePopup.style.minWidth = '600px';
	updatePopup.style.fontSize = '14px';
	updatePopup.style.display = 'none';
	updatePopup.style.textAlign = 'left';
	updatePopup.style.fontFamily = 'sans-serif';
	updatePopup.style.maxWidth = '120vw';
	updatePopup.style.maxHeight = '100vh';
	updatePopup.style.overflowY = 'auto';
	updatePopup.style.backdropFilter = 'blur(20px)';
	updatePopup.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
	updatePopup.style.WebkitBackdropFilter = 'blur(10px)';

	const titleEl = document.createElement('h2');
	titleEl.textContent = 'Soyjak Party Enhanced';
	titleEl.style.marginTop = '0';
	titleEl.style.fontSize = '28px';
	titleEl.style.fontWeight = 'bold';
	titleEl.style.marginBottom = '12px';
	titleEl.style.textAlign = 'left';

	const udiv = document.createElement('hr');

	const githubLink = document.createElement('a');
	githubLink.href = 'https://github.com/extteen/soyjakparty-enhanced';
	githubLink.target = '_blank';
	githubLink.textContent = 'GitHub Repo';
	githubLink.style.display = 'block';
	githubLink.style.marginTop = '10px';

	const changelogLink = document.createElement('a');
	changelogLink.href = 'https://github.com/extteen/soyjakparty-enhanced/releases';
	changelogLink.target = '_blank';
	changelogLink.textContent = 'Changelog';
	changelogLink.style.display = 'block';

	const closeBtn = document.createElement('button');
	closeBtn.textContent = '✖ Close';
	closeBtn.style.marginTop = '20px';
	closeBtn.style.padding = '6px 10px';
	closeBtn.style.cursor = 'pointer';
	closeBtn.style.borderRadius = '4px';

	const debuglink = document.createElement('a');
	debuglink.href = '#';
	debuglink.textContent = 'Debug Menu';
	debuglink.style.display = 'block';
	debuglink.style.fontSize = '12px';
	debuglink.style.marginTop = '8px';
	debuglink.addEventListener('click', (e) => {
		e.preventDefault();
		debugMenu.style.display = debugMenu.style.display === 'none' ? 'block' : 'none';
	});

	updatePopup.appendChild(titleEl);
	updatePopup.appendChild(udiv);
	updatePopup.appendChild(githubLink);
	updatePopup.appendChild(changelogLink);
	updatePopup.appendChild(closeBtn);
	updatePopup.appendChild(debuglink);
	document.body.appendChild(updatePopup);

	closeBtn.addEventListener('click', () => {
		updatePopup.style.display = 'none';
	});

	const updateActionSection = document.createElement('div');
	updateActionSection.style.display = 'none';
	updateActionSection.style.marginTop = '12px';
	updateActionSection.style.paddingTop = '10px';
	updateActionSection.style.borderTop = '1px solid rgba(0,0,0,0.08)';
	updateActionSection.style.textAlign = 'center';

	const updateMessage = document.createElement('div');
	updateMessage.style.fontWeight = '600';
	updateMessage.style.marginBottom = '8px';
	updateActionSection.appendChild(updateMessage);

	const doUpdateBtn = document.createElement('button');
	doUpdateBtn.textContent = 'Update Now';
	doUpdateBtn.style.padding = '6px 10px';
	doUpdateBtn.style.borderRadius = '6px';
	doUpdateBtn.style.marginRight = '8px';
	doUpdateBtn.style.cursor = 'pointer';

	const openReleaseBtn = document.createElement('button');
	openReleaseBtn.textContent = 'Open Release';
	openReleaseBtn.style.padding = '6px 10px';
	openReleaseBtn.style.borderRadius = '6px';
	openReleaseBtn.style.cursor = 'pointer';

	updateActionSection.appendChild(doUpdateBtn);
	updateActionSection.appendChild(openReleaseBtn);

	updatePopup.appendChild(updateActionSection);

	const debugMenu = document.createElement('div');
	debugMenu.style.display = 'none';
	debugMenu.style.position = 'fixed';
	debugMenu.style.bottom = '10px';
	debugMenu.style.right = '10px';
	debugMenu.style.background = '#fff';
	debugMenu.style.border = '1px solid #ccc';
	debugMenu.style.fontSize = '12px';
	debugMenu.style.zIndex = '100001';

	const debugTitle = document.createElement('div');
	debugTitle.textContent = 'Debug Menu';
	debugTitle.style.fontWeight = 'bold';
	debugTitle.style.marginBottom = '6px';
	debugMenu.appendChild(debugTitle);

	const clearAllDataLink = document.createElement('a');
	clearAllDataLink.href = '#';
	clearAllDataLink.textContent = 'Delete all site+script data(excluding cookies)';
	clearAllDataLink.style.display = 'block';
	clearAllDataLink.addEventListener('click', async (e) => {
		e.preventDefault();
		localStorage.clear();
		alert('Your settings and data have been cleared or something');
	});
	debugMenu.appendChild(clearAllDataLink);
	document.body.appendChild(debugMenu);

	//SOYMOJI, TEXT FORMAT AND OTHER RAISIN

	async function fetchHtmlContent(url) {
		try {
			/*const response = await fetch(url);
			if (!response.ok) {
			  const error = new Error(`HTTP error! Status: ${response.status} for URL: ${url}`);
			  error.status = response.status;
			  throw error;
			}
			const htmlContent = await response.text();
			return htmlContent;*/
			const htmlContent = await new Promise((resolve, reject) => {
				GM_xmlhttpRequest({
					method: "GET",
					url,
					onload(response) {
						if (response.status < 200 || response.status >= 300) {
							const error = new Error(`HTTP error! Status: ${response.status} for URL: ${url}`);
							error.status = response.status;
							reject(error);
							return;
						}
						resolve(response.responseText);
					},
					onerror(err) {
						reject(err);
					}
				})
			});
			return htmlContent;
		} catch (error) {
			console.error('Error fetching HTML content:', error);
			throw error;
		}
	}

	function parseAndExtractSoybooruThumbnails(htmlString) {
		const parser = new DOMParser();
		const doc = parser.parseFromString(htmlString, 'text/html');

		const thumbnailContainer = doc.querySelector('section#image-list div.navside.tab div.shm-image-list');
		const extractedThumbnails = [];

		if (thumbnailContainer) {
			const postLinks = thumbnailContainer.querySelectorAll('a.shm-thumb-link');

			postLinks.forEach(linkElement => {
				const postId = linkElement.dataset.postId;
				const tags = linkElement.dataset.tags || linkElement.querySelector('img')?.title?.split(' // ')[0] || 'N/A';

				const imgElement = linkElement.querySelector('img');
				let rawThumbnailSrc = imgElement ? imgElement.getAttribute('src') : null;

				let thumbnailUrl = null;
				let fullImageUrl = null;

				if (rawThumbnailSrc && postId) {
					if (rawThumbnailSrc.startsWith('http://') || rawThumbnailSrc.startsWith('https://')) {
						if (rawThumbnailSrc.includes('soybooru.com')) {
							thumbnailUrl = rawThumbnailSrc;
						} else {
							console.warn("Found absolute thumbnail URL not from soybooru.com:", rawThumbnailSrc);
							return;
						}
					} else if (rawThumbnailSrc.startsWith('//')) {
						thumbnailUrl = `https:${rawThumbnailSrc}`;
					} else if (rawThumbnailSrc.startsWith('/')) {
						thumbnailUrl = `https://soybooru.com${rawThumbnailSrc}`;
					} else {
						thumbnailUrl = `https://soybooru.com/${rawThumbnailSrc}`;
					}

					const thumbUrlParts = thumbnailUrl.split('/');
					const hash = thumbUrlParts[thumbUrlParts.length - 2];

					const originalMime = linkElement.dataset.mime;
					let originalExt = 'jpg';
					if (originalMime) {
						const mimeParts = originalMime.split('/');
						if (mimeParts.length > 1) {
							originalExt = mimeParts[1].toLowerCase();
							if (originalExt === 'jpeg') originalExt = 'jpg';
							if (originalExt === 'mp4') originalExt = 'webm';
						}
					} else if (imgElement && imgElement.src.includes('.')) {
						originalExt = imgElement.src.split('.').pop();
					}

					const filenameTitlePart = 'SoyBooru';
					const encodedFilenameTitle = encodeURIComponent(filenameTitlePart);

					fullImageUrl = `https://soybooru.com/_images/${hash}/${postId}%20-%20${encodedFilenameTitle}.${originalExt}`;
				}

				if (postId && thumbnailUrl && fullImageUrl) {
					extractedThumbnails.push({
						postId: postId,
						thumbnailUrl: thumbnailUrl,
						fullImageUrl: fullImageUrl,
						tags: tags
					});
				} else {
					console.warn(`Skipping post due to missing crucial data. PostId: ${postId}, Thumbnail: ${thumbnailUrl}, Full Image: ${fullImageUrl}`);
				}
			});
		} else {
			console.warn('Soybooru thumbnail container (section#image-list div.navside.tab div.shm-image-list) not found.');
		}

		return extractedThumbnails;
	}

	const soybooruDirectSearch = localStorage.getItem('soybooruDirectSearch') === 'true';
	let currentSearchTags = '';
	let currentPageNumber = 1;

	const soybooruFloatingWindow = document.createElement('div');
	soybooruFloatingWindow.id = 'soybooru-floating-window';
	soybooruFloatingWindow.style.display = 'none';
	soybooruFloatingWindow.style.position = 'fixed';
	soybooruFloatingWindow.style.top = '100px';
	soybooruFloatingWindow.style.left = '100px';
	soybooruFloatingWindow.style.width = '400px';
	soybooruFloatingWindow.style.maxHeight = '500px';
	soybooruFloatingWindow.style.background = '#fff';
	soybooruFloatingWindow.style.border = '1px solid #ccc';
	soybooruFloatingWindow.style.borderRadius = '8px';
	soybooruFloatingWindow.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
	soybooruFloatingWindow.style.zIndex = '10000';
	soybooruFloatingWindow.style.resize = 'both';
	soybooruFloatingWindow.style.minWidth = '250px';
	soybooruFloatingWindow.style.minHeight = '150px';
	soybooruFloatingWindow.style.flexDirection = 'column';
	soybooruFloatingWindow.style.boxSizing = 'border-box';

	document.body.appendChild(soybooruFloatingWindow);

	const windowHeader = document.createElement('div');
	windowHeader.style.padding = '8px 10px';
	windowHeader.style.background = '#f0f0f0';
	windowHeader.style.borderBottom = '1px solid #ddd';
	windowHeader.style.cursor = 'grab';
	windowHeader.style.display = 'flex';
	windowHeader.style.justifyContent = 'space-between';
	windowHeader.style.alignItems = 'center';
	windowHeader.style.fontWeight = 'bold';
	windowHeader.textContent = 'Soybooru Search';
	windowHeader.style.flexShrink = '0';
	soybooruFloatingWindow.appendChild(windowHeader);

	const closeButton = document.createElement('button');
	closeButton.textContent = '✖';
	closeButton.style.background = 'none';
	closeButton.style.border = 'none';
	closeButton.style.fontSize = '16px';
	closeButton.style.cursor = 'pointer';
	closeButton.style.color = '#888';
	closeButton.style.marginLeft = 'auto';
	closeButton.addEventListener('click', () => {
		soybooruFloatingWindow.style.display = 'none';
	});
	windowHeader.appendChild(closeButton);

	const windowContent = document.createElement('div');
	windowContent.style.padding = '10px';
	windowContent.style.display = 'flex';
	windowContent.style.flexDirection = 'column';
	windowContent.style.gap = '8px';
	windowContent.style.flexGrow = '1';
	windowContent.style.minHeight = '0';
	windowContent.style.overflow = 'hidden';
	soybooruFloatingWindow.appendChild(windowContent);

	const floatingSearchInput = document.createElement('input');
	floatingSearchInput.type = 'text';
	floatingSearchInput.classList.add('soybooru-search-input-floating');
	floatingSearchInput.placeholder = 'Enter tags...(space between each tag)';
	floatingSearchInput.style.width = '100%';
	floatingSearchInput.style.padding = '5px';
	floatingSearchInput.style.boxSizing = 'border-box';
	floatingSearchInput.style.borderRadius = '4px';
	floatingSearchInput.style.border = '1px solid #ddd';
	windowContent.appendChild(floatingSearchInput);

	const floatingLoadingIndicator = document.createElement('div');
	floatingLoadingIndicator.classList.add('soybooru-loading-indicator-floating');
	floatingLoadingIndicator.textContent = 'Loading...';
	floatingLoadingIndicator.style.display = 'none';
	floatingLoadingIndicator.style.textAlign = 'center';
	floatingLoadingIndicator.style.padding = '10px';
	floatingLoadingIndicator.style.color = '#888';
	windowContent.appendChild(floatingLoadingIndicator);

	const floatingSearchResultsDisplay = document.createElement('div');
	floatingSearchResultsDisplay.classList.add('soybooru-search-results-floating');
	floatingSearchResultsDisplay.style.display = 'grid';
	floatingSearchResultsDisplay.style.gridTemplateColumns = 'repeat(auto-fill, minmax(100px, 1fr))';
	floatingSearchResultsDisplay.style.gap = '5px';
	floatingSearchResultsDisplay.style.overflowY = 'auto';
	floatingSearchResultsDisplay.style.overflowX = 'hidden';
	floatingSearchResultsDisplay.style.flexGrow = '1';
	floatingSearchResultsDisplay.style.minHeight = '0';
	floatingSearchResultsDisplay.style.padding = '5px';
	floatingSearchResultsDisplay.style.borderRadius = '4px';
	windowContent.appendChild(floatingSearchResultsDisplay);

	const paginationControls = document.createElement('div');
	paginationControls.style.display = 'flex';
	paginationControls.style.justifyContent = 'center';
	paginationControls.style.alignItems = 'center';
	paginationControls.style.gap = '10px';
	paginationControls.style.padding = '8px 0';
	paginationControls.style.borderTop = '1px solid #eee';
	paginationControls.style.flexShrink = '0';
	windowContent.appendChild(paginationControls);

	const prevPageButton = document.createElement('button');
	prevPageButton.textContent = 'Previous';
	prevPageButton.classList.add('soybooru-pagination-button');
	prevPageButton.disabled = true;
	paginationControls.appendChild(prevPageButton);

	const pageNumberInput = document.createElement('input');
	pageNumberInput.type = 'number';
	pageNumberInput.min = '1';
	pageNumberInput.value = '1';
	pageNumberInput.style.width = '50px';
	pageNumberInput.style.textAlign = 'center';
	pageNumberInput.style.padding = '3px';
	pageNumberInput.style.borderRadius = '4px';
	pageNumberInput.style.border = '1px solid #ddd';
	paginationControls.appendChild(pageNumberInput);

	const nextPageButton = document.createElement('button');
	nextPageButton.textContent = 'Next';
	nextPageButton.classList.add('soybooru-pagination-button');
	nextPageButton.disabled = true;
	paginationControls.appendChild(nextPageButton);

	let isDragging = false;
	let offsetX, offsetY;

	windowHeader.addEventListener('mousedown', (e) => {
		isDragging = true;
		offsetX = e.clientX - soybooruFloatingWindow.getBoundingClientRect().left;
		offsetY = e.clientY - soybooruFloatingWindow.getBoundingClientRect().top;
		soybooruFloatingWindow.style.cursor = 'grabbing';
	});

	document.addEventListener('mousemove', (e) => {
		if (!isDragging) return;
		soybooruFloatingWindow.style.left = `${e.clientX - offsetX}px`;
		soybooruFloatingWindow.style.top = `${e.clientY - offsetY}px`;
	});

	document.addEventListener('mouseup', () => {
		isDragging = false;
		soybooruFloatingWindow.style.cursor = 'grab';
	});

	const thumbnailContextMenu = document.createElement('div');
	thumbnailContextMenu.id = 'soybooru-thumbnail-context-menu';
	thumbnailContextMenu.style.display = 'none';
	thumbnailContextMenu.style.position = 'absolute';
	thumbnailContextMenu.style.background = '#fff';
	thumbnailContextMenu.style.border = '1px solid #ccc';
	thumbnailContextMenu.style.borderRadius = '4px';
	thumbnailContextMenu.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
	thumbnailContextMenu.style.zIndex = '10001';
	thumbnailContextMenu.style.padding = '5px 0';

	document.body.appendChild(thumbnailContextMenu);

	function addContextMenuItem(text, action, postData, targetTextbox) {
		const item = document.createElement('div');
		item.textContent = text;
		item.style.padding = '5px 10px';
		item.style.cursor = 'pointer';
		item.style.whiteSpace = 'nowrap';
		item.addEventListener('mouseenter', () => item.style.backgroundColor = '#f0f0f0');
		item.addEventListener('mouseleave', () => item.style.backgroundColor = 'transparent');
		item.addEventListener('click', () => {
			if (!targetTextbox) {
				floatingSearchResultsDisplay.innerHTML = '<p style="text-align: center; color: #F44336; grid-column: 1 / -1;">Error: No active textbox detected. Please click on a text input before searching.</p>';
				floatingLoadingIndicator.style.display = 'none';
				setTimeout(() => soybooruFloatingWindow.style.display = 'none', 2500);
				thumbnailContextMenu.style.display = 'none';
				return;
			}
			action(postData, targetTextbox);
			thumbnailContextMenu.style.display = 'none';
		});
		thumbnailContextMenu.appendChild(item);
	}

	document.addEventListener('click', (e) => {
		if (!thumbnailContextMenu.contains(e.target)) {
			thumbnailContextMenu.style.display = 'none';
		}
	});
	document.addEventListener('contextmenu', (e) => {
		if (!thumbnailContextMenu.contains(e.target) && !e.target.closest('.soybooru-thumb-item')) {
			thumbnailContextMenu.style.display = 'none';
		}
	});


	function insertTextIntoTextbox(textbox, textToInsert) {
		if (!textbox) return;

		if (document.activeElement !== textbox) {
			textbox.focus();
		}

		if (textbox.tagName === 'TEXTAREA' || textbox.tagName === 'INPUT') {
			const start = textbox.selectionStart || 0;
			const end = textbox.selectionEnd || 0;
			const currentText = textbox.value;
			textbox.value = currentText.slice(0, start) + textToInsert + currentText.slice(end);
			textbox.selectionStart = textbox.selectionEnd = start + textToInsert.length;
		} else if (textbox.isContentEditable) {
			document.execCommand('insertText', false, textToInsert);
		}
	}


	async function performSoybooruSearch(tags, page) {
		floatingLoadingIndicator.style.display = 'block';
		floatingSearchResultsDisplay.innerHTML = '';
		prevPageButton.disabled = true;
		nextPageButton.disabled = true;

		const htmlUrl = `https://soybooru.com/post/list/${encodeURIComponent(tags)}/${page}`;
		let htmlText = null;
		let is404 = false;

		try {
			htmlText = await fetchHtmlContent(htmlUrl);
		} catch (error) {
			if (error.status === 404) {
				is404 = true;
			}
			console.error('Error during search:', error);
		}

		if (htmlText) {
			const posts = parseAndExtractSoybooruThumbnails(htmlText);

			if (posts.length > 0) {
				renderSoybooruResults(posts, floatingSearchResultsDisplay, soybooruFloatingWindow.currentTextbox);
				nextPageButton.disabled = false;
			} else {
				floatingSearchResultsDisplay.innerHTML = '<p style="text-align: center; color: #888; grid-column: 1 / -1;">No results found for these tags on this page.</p>';
				nextPageButton.disabled = true;
			}
		} else {
			if (is404) {
				floatingSearchResultsDisplay.innerHTML = '<p style="text-align: center; color: #888; grid-column: 1 / -1;">No results found for these tags.</p>';
			} else {
				floatingSearchResultsDisplay.innerHTML = '<p style="text-align: center; color: #888; grid-column: 1 / -1;">Failed to load Soybooru content (try completing McChallenge).</p>';
			}
			nextPageButton.disabled = true;
		}
		floatingLoadingIndicator.style.display = 'none';

		prevPageButton.disabled = (currentPageNumber <= 1);
	}


	floatingSearchInput.addEventListener('keydown', async (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			e.stopPropagation();
			const soybooruDirectSearch = localStorage.getItem('soybooruDirectSearch') === 'true';
			const query = floatingSearchInput.value.trim();
			if (!query) return;

			if (soybooruDirectSearch) {
				window.open(`https://soybooru.com/post/list/${encodeURIComponent(query)}/1`, '_blank');
				soybooruFloatingWindow.style.display = 'none';
			} else {
				currentSearchTags = query;
				currentPageNumber = 1;
				pageNumberInput.value = currentPageNumber;
				await performSoybooruSearch(currentSearchTags, currentPageNumber);
			}
		}
	});

	prevPageButton.addEventListener('click', async () => {
		if (currentPageNumber > 1 && currentSearchTags) {
			currentPageNumber--;
			pageNumberInput.value = currentPageNumber;
			await performSoybooruSearch(currentSearchTags, currentPageNumber);
		}
	});

	nextPageButton.addEventListener('click', async () => {
		if (currentSearchTags && !nextPageButton.disabled) {
			currentPageNumber++;
			pageNumberInput.value = currentPageNumber;
			await performSoybooruSearch(currentSearchTags, currentPageNumber);
		}
	});

	pageNumberInput.addEventListener('change', async () => {
		const newPage = parseInt(pageNumberInput.value, 10);
		if (!isNaN(newPage) && newPage >= 1 && currentSearchTags) {
			currentPageNumber = newPage;
			await performSoybooruSearch(currentSearchTags, currentPageNumber);
		} else {
			pageNumberInput.value = currentPageNumber;
		}
	});

	pageNumberInput.addEventListener('keydown', async (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			const newPage = parseInt(pageNumberInput.value, 10);
			if (!isNaN(newPage) && newPage >= 1 && currentSearchTags) {
				currentPageNumber = newPage;
				await performSoybooruSearch(currentSearchTags, currentPageNumber);
			} else {
				pageNumberInput.value = currentPageNumber;
			}
		}
	});

	function renderSoybooruResults(posts, resultsDisplayElement, targetTextbox) {
		resultsDisplayElement.innerHTML = '';

		posts.forEach(post => {
			const thumbWrapper = document.createElement('div');
			thumbWrapper.classList.add('soybooru-thumb-item');
			thumbWrapper.style.textAlign = 'center';
			thumbWrapper.style.cursor = 'pointer';
			thumbWrapper.style.padding = '3px';
			thumbWrapper.style.border = '1px solid transparent';
			thumbWrapper.style.borderRadius = '3px';
			thumbWrapper.style.transition = 'all 0.1s ease';
			thumbWrapper.style.width = '100%';
			thumbWrapper.style.boxSizing = 'border-box';

			const img = document.createElement('img');
			img.src = post.thumbnailUrl;
			img.alt = `Post ID: ${post.postId}`;
			img.title = `ID: ${post.postId}\nTags: ${post.tags}`;
			img.style.maxWidth = '100%';
			img.style.height = 'auto';
			img.style.display = 'block';
			img.style.margin = '0 auto';

			thumbWrapper.appendChild(img);
			resultsDisplayElement.appendChild(thumbWrapper);

			thumbWrapper.addEventListener('contextmenu', (e) => {
				e.preventDefault();

				thumbnailContextMenu.innerHTML = '';



				addContextMenuItem('Download', async (data, textbox) => {
					GM_download({
						url: post.fullImageUrl,
						name: post.fullImageUrl.split('/').pop() || `soybooru_${post.postId}`,
					});
				}, post, targetTextbox);

				addContextMenuItem('Embed Thumbnail', (data, textbox) => {
					insertTextIntoTextbox(textbox, `[thumb]${post.postId}[/thumb]`);
					soybooruFloatingWindow.style.display = 'none';
				}, post, targetTextbox);

				addContextMenuItem('Open in New Tab', (data) => {
					window.open(`https://soybooru.com/post/view/${data.postId}`, '_blank');
					soybooruFloatingWindow.style.display = 'none';
				}, post, targetTextbox);

				thumbnailContextMenu.style.left = `${e.clientX}px`;
				thumbnailContextMenu.style.top = `${e.clientY}px`;
				thumbnailContextMenu.style.display = 'block';
			});

			thumbWrapper.addEventListener('mouseenter', () => {
				thumbWrapper.style.borderColor = '#aaa';
				thumbWrapper.style.backgroundColor = '#f5f5f5';
			});
			thumbWrapper.addEventListener('mouseleave', () => {
				thumbWrapper.style.borderColor = 'transparent';
				thumbWrapper.style.backgroundColor = 'transparent';
			});
		});
	}


	function applyTransparencyEffects(element, isTransparent) {
		if (isTransparent) {
			element.style.backdropFilter = 'blur(20px)';
			element.style.WebkitBackdropFilter = 'blur(10px)';
			element.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
			element.style.fontFamily = '';
		} else {
			element.style.backdropFilter = 'none';
			element.style.WebkitBackdropFilter = 'none';
			element.style.backgroundColor = '#ffffff';
			element.style.fontFamily = 'monospace';
			element.style.color = '#000000';
		}
	}

	function updateAllTransparencyEffects() {
		const isTransparent = localStorage.getItem('transparencyDisabled') !== 'true';

		const formatMenu = document.getElementById('text-format-menu');
		if (formatMenu) applyTransparencyEffects(formatMenu, isTransparent);

		const soymojiMenu = document.querySelector('.soymoji-menu');
		if (soymojiMenu) applyTransparencyEffects(soymojiMenu, isTransparent);

		document.querySelectorAll('.format-button').forEach(button => {
			if (isTransparent) {
				button.style.backdropFilter = 'blur(20px)';
				button.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
				button.addEventListener('mouseenter', () => button.style.backgroundColor = 'rgba(255, 255, 255, 0.5)');
				button.addEventListener('mouseleave', () => button.style.backgroundColor = 'rgba(255, 255, 255, 0.4)');
			} else {
				button.style.backdropFilter = 'none';
				button.style.backgroundColor = '#f0f0f0';
				button.addEventListener('mouseenter', () => button.style.backgroundColor = '#e0e0e0');
				button.addEventListener('mouseleave', () => button.style.backgroundColor = '#f0f0f0');
			}
		});

		document.querySelectorAll('.soymoji-option').forEach(option => {
			if (isTransparent) {
				option.style.backgroundColor = 'transparent';
				option.addEventListener('mouseenter', () => option.style.backgroundColor = 'rgba(255, 255, 255, 0.35)');
				option.addEventListener('mouseleave', () => option.style.backgroundColor = 'transparent');
			} else {
				option.style.backgroundColor = '#ffffff';
				option.addEventListener('mouseenter', () => option.style.backgroundColor = '#f0f0f0');
				option.addEventListener('mouseleave', () => option.style.backgroundColor = '#ffffff');
			}
		});
	}

	//character and line counters
	//MEDS!!!!!!!!!! Not working well so nothing burger, don't worry next updatearino

	document.addEventListener('transparencyChanged', () => {
		updateAllTransparencyEffects();
	});

	const formatTiers = [
		{
			title: 'Colors',
			formats: [
				{ label: 'Red', open: '==', close: '==' },
				{ label: 'Blue', open: '--', close: '--' },
				{ label: 'Purple', open: '-=', close: '-=' },
				{ label: 'Pink', open: '-~-', close: '-~-' }
			]
		},
		{
			title: 'Text Formats',
			formats: [
				{ label: 'Big', open: '+=', close: '=+' },
				{ label: 'Spoiler', open: '**', close: '**' },
				{ label: 'Bold', open: "'''", close: "'''" },
				{ label: 'Italic', open: "''", close: "''" }
			]
		},
		{
			title: 'Text Formats 2',
			formats: [
				{ label: 'Strikethrough', open: '~~', close: '~~' },
				{ label: 'Underline', open: '__', close: '__' },
				{ label: 'Code', open: '```', close: '```' }
			]
		},
		{
			title: 'Glows',
			formats: [
				{ label: 'Red Glow*', open: '!!', close: '!!' },
				{ label: 'Green Glow', open: '%%', close: '%%' },
				{ label: 'Sneed Glow', open: '::', close: '::' },
				{ label: 'Blue Glow', open: ';;', close: ';;' }
			]
		},
		{
			title: 'Gradients',
			formats: [
				{ label: 'Ruby', open: '~-~!!', close: '!!~-~' },
				{ label: 'Gemerald', open: '~-~%%', close: '%%~-~' },
				{ label: 'Gold', open: '~-~::', close: '::~-~' },
				{ label: 'Gem', open: '~-~;;', close: ';;~-~' },
				{ label: 'Rainbow', open: '~-~', close: '~-~' }
			]
		},
		{
			title: 'Combinations',
			formats: [
				{ label: 'Hacker', open: '**```~-~%%', close: '%%~-~```**' },
				{ label: 'calm', open: '```--;;', close: ';;--```' },
				{ label: 'RAGE', open: "'''==+=!!", close: "!!=+=='''" },
				{ label: 'Brimstone', open: '==::', close: '::==' }
			]
		},
		{
			title: 'Symbols and Other',
			formats: [
				{ label: '>', open: '>', close: '' },
				{ label: '<', open: '<', close: '' },
				{ label: '^', open: '^', close: '' },
				{ label: 'Ϫ', open: 'Ϫ', close: '' },
				{ label: '(((Jew)))', open: '(((', close: ')))' },
				{ label: "'ru embed", open: '[thumb]', close: '[/thumb]' }
			]
		},
	];

	const formatMenu = document.createElement('div');
	formatMenu.id = "text-format-menu";
	formatMenu.style.display = 'none';
	formatMenu.style.position = 'absolute';
	formatMenu.style.zIndex = '9999';
	formatMenu.style.padding = '5px';
	formatMenu.style.borderRadius = '5px';
	formatMenu.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
	applyTransparencyEffects(formatMenu, localStorage.getItem('transparencyDisabled') !== 'true');


	formatTiers.forEach(tier => {
		const section = document.createElement('div');
		section.className = 'format-tier';
		section.style.marginBottom = '8px';

		const title = document.createElement('div');
		title.className = 'format-tier-title';
		title.innerText = tier.title;
		title.style.fontWeight = 'bold';
		title.style.marginBottom = '5px';
		section.appendChild(title);

		const buttonRow = document.createElement('div');
		buttonRow.className = 'format-button-row';
		buttonRow.style.display = 'flex';
		buttonRow.style.flexWrap = 'wrap';
		buttonRow.style.gap = '5px';

		tier.formats.forEach(format => {
			const button = document.createElement('button');
			button.className = 'format-button';
			button.innerText = format.label;

			const rainbowText = '<span style="background: linear-gradient(to left, red, orange, yellow, green, cyan, blue, violet); -webkit-background-clip: text; -webkit-text-fill-color: transparent; pointer-events: none;">' + button.textContent + '</span>';
			// Colors
			if (format.label === 'Red') {
				button.innerHTML = '<span style="color: rgb(175, 10, 15); font-size: 11pt;font-weight: bold; pointer-events: none;">' + button.textContent + '</span>';
			} else if (format.label === 'Blue') {
				button.innerHTML = '<span style="color: rgb(36, 36, 173); font-size: 11pt;font-weight: bold; pointer-events: none;">' + button.textContent + '</span>';
			} else if (format.label === 'Pink') {
				button.style.color = '#fd3d98';
				button.style.fontWeight = 'bold'
			} else if (format.label === 'Purple') {
				button.style.color = '#720b98';
				button.style.fontWeight = 'bold'
				// Text Formats
			} else if (format.label === 'Big') {
				button.innerHTML = '<span style="font: 14.4px sans-serif; pointer-events: none;">' + button.textContent + '</span>';
			} else if (format.label === 'Spoiler') {
				button.innerHTML = '<span style="background:rgb(0, 0, 0); color: #ffffff; padding: 0 1px; pointer-events: none;">' + button.textContent + '</span>'
			} else if (format.label === 'Bold') {
				button.style.fontWeight = 'bold'
			} else if (format.label === 'Italic') {
				button.style.fontStyle = 'italic'
				// Text Formats 2
			} else if (format.label === 'Strikethrough') {
				button.innerHTML = '<span style="pointer-events: none; text-decoration: line-through;">' + button.textContent + '</span>';
			} else if (format.label === 'Underline') {
				button.innerHTML = '<span style="pointer-events: none; text-decoration: underline;">' + button.textContent + '</span>';
			} else if (format.label === 'Code') {
				button.style.fontFamily = 'monospace'
				// Glows
			} else if (format.label === 'Red Glow*') {
				button.style.textShadow = '0px 0px 40px #ff0000, 0px 0px 2px #ff0000'
			} else if (format.label === 'Green Glow') {
				button.style.textShadow = '0px 0px 40px #00fe20, 0px 0px 2px #00fe20'
			} else if (format.label === 'Sneed Glow') {
				button.style.textShadow = '0px 0px 40px #fffb00, 0px 0px 2px #fffb00'
			} else if (format.label === 'Blue Glow') {
				button.style.textShadow = '0px 0px 40px #36d7f7, 0px 0px 2px #36d7f7';
				// Gradients
			} else if (format.label === 'Ruby') {
				button.innerHTML = rainbowText;
				button.style.textShadow = '0px 0px 40px #ff0000, 0px 0px 2px #ff0000';
			} else if (format.label === 'Gemerald') {
				button.innerHTML = rainbowText;
				button.style.textShadow = '0px 0px 40px #00fe20, 0px 0px 2px #00fe20';
			} else if (format.label === 'Gold') {
				button.innerHTML = rainbowText;
				button.style.textShadow = '0px 0px 40px #fffb00, 0px 0px 2px #fffb00';
			} else if (format.label === 'Gem') {
				button.innerHTML = rainbowText;
				button.style.textShadow = '0px 0px 40px #36d7f7, 0px 0px 2px #36d7f7';
			} else if (format.label === 'Rainbow') {
				button.innerHTML = rainbowText;
				// Combinations
			} else if (format.label === 'Hacker') {
				button.innerHTML = '<span style="pointer-events: none; background: black; display: inline-block; padding: 0 1px;"><span style="background: linear-gradient(to left, red, orange, yellow, green, cyan, blue, violet); -webkit-background-clip: text; -webkit-text-fill-color: transparent; color: #ffffff; pointer-events: none;">' + button.textContent + '</span></span>';
				button.style.fontFamily = 'monospace'
				button.style.textShadow = '0px 0px 40px #00fe20, 0px 0px 2px #00fe20';
			} else if (format.label === 'calm') {
				button.innerHTML = '<span style="color: rgb(36, 36, 173); font-size: 11pt;font-weight: bold; pointer-events: none;">' + button.textContent + '</span>';
				button.style.fontFamily = 'monospace'
				button.style.textShadow = '0px 0px 40px #36d7f7, 0px 0px 2px #36d7f7';
			} else if (format.label === 'RAGE') {
				button.innerHTML = '<span style="font: 14.4px sans-serif; color: rgb(175, 10, 15); font-size: 11pt;font-weight: bold; pointer-events: none; text-shadow:0px 0px 40px #ff0000, 0px 0px 2px #ff0000">' + button.textContent + '</span>';
			} else if (format.label === 'Brimstone') {
				button.innerHTML = '<span style="color: rgb(175, 10, 15); font-size: 11pt;font-weight: bold; pointer-events: none;">' + button.textContent + '</span>';
				button.style.textShadow = '0px 0px 40px #fffb00, 0px 0px 2px #fffb00';
				// Symbols and other
			} else if (format.label === '>') {
				button.style.color = '#B8D962';
			} else if (format.label === '<') {
				button.style.color = '#f6750b';
			} else if (format.label === '^') {
				button.style.color = '#6577E6';
			} else if (format.label === '(((Jew)))') {
				button.innerHTML = '<span style="background:rgb(255,255,255); color: #3060a8; pointer-events: none;">' + button.textContent + '</span>'
			};



			button.style.padding = '5px 8px';
			button.style.cursor = 'pointer';
			button.style.borderRadius = '1px';
			button.style.fontSize = '12px';
			button.style.whiteSpace = 'nowrap';

			if (localStorage.getItem('transparencyDisabled') !== 'true') {
				button.style.backdropFilter = 'blur(20px)';
				button.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
			} else {
				button.style.backgroundColor = '#f0f0f0';
			}

			button.addEventListener('mouseenter', () => {
				button.style.backgroundColor = localStorage.getItem('transparencyDisabled') !== 'true'
					? 'rgba(255, 255, 255, 0.5)'
					: '#e0e0e0';
			});
			button.addEventListener('mouseleave', () => {
				button.style.backgroundColor = localStorage.getItem('transparencyDisabled') !== 'true'
					? 'rgba(255, 255, 255, 0.4)'
					: '#f0f0f0';
			});

			buttonRow.appendChild(button);
		});

		section.appendChild(buttonRow);
		formatMenu.appendChild(section);
	});

	const formatNote = document.createElement('div');
	formatNote.style.fontSize = '11px';
	formatNote.style.color = '#555';
	formatNote.style.marginTop = '10px';
	formatNote.style.fontStyle = 'italic';
	formatNote.textContent = '*Use for each word.';
	formatMenu.appendChild(formatNote);

	document.body.appendChild(formatMenu);

	const soymojiMenu = document.createElement('div');
	soymojiMenu.classList.add("soymoji-menu");
	soymojiMenu.style.display = 'none';
	soymojiMenu.style.position = 'absolute';
	soymojiMenu.style.zIndex = '9999';
	soymojiMenu.style.padding = '5px';
	soymojiMenu.style.gridTemplateColumns = 'repeat(7, 1fr)';
	soymojiMenu.style.gap = '2px';
	soymojiMenu.style.width = '620px';
	soymojiMenu.style.borderRadius = '5px';
	soymojiMenu.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
	applyTransparencyEffects(soymojiMenu, localStorage.getItem('transparencyDisabled') !== 'true');

	const soymojiFiles = [
		"a24.png", "ack.png", "amerimutt.png", "army.png", "army2.png", "baby.png", "bernd.png", "chud.gif",
		"coal.png", "cob.png", "colorjak.png", "cry.png", "dancingswede.gif",
		"doctos.png", "euromutt.png", "fact.png", "feralrage.png", "feral_animated.gif",
		"gem.png", "gigachad.png", "htsm.png", "impish.png", "jacobson.png", "jew.png", "jig.gif",
		"med.gif", "microjaklover.png", "neutralplier.png", "nojak.png", "over.png",
		"pepe.png", "pepetux.png", "pepetwerk.gif", "perrojak.png", "posteditagain.png",
		"sisa.png", "slf.gif", "smug.png", "smugsoyak.png", "soot.png",
		"soyak.png", "soyberg.png", "soytan.png", "sprokejak.png", "squirrel.png",
		"swede.png", "though.png", "transheart.png", "trio.png", "trvke.png",
		"wew.png", "wholesome.png", "wholesomegem.png", "wholesomeheart.png"
	];

	soymojiFiles.forEach(filename => {
		const shortcode = `${filename.split('.')[0]}`;
		const soymojiDiv = document.createElement('div');
		soymojiDiv.classList.add('soymoji-option');
		soymojiDiv.style.display = 'flex';
		soymojiDiv.style.flexDirection = 'column';
		soymojiDiv.style.alignItems = 'center';
		soymojiDiv.style.textAlign = 'center';
		soymojiDiv.style.cursor = 'pointer';
		soymojiDiv.style.padding = '2px';
		soymojiDiv.style.borderRadius = '0px';
		soymojiDiv.addEventListener('mouseenter', () => {
			soymojiDiv.style.backgroundColor = localStorage.getItem('transparencyDisabled') !== 'true'
				? 'rgba(255, 255, 255, 0.35)'
				: '#f0f0f0';
		});
		soymojiDiv.addEventListener('mouseleave', () => {
			soymojiDiv.style.backgroundColor = localStorage.getItem('transparencyDisabled') !== 'true'
				? 'transparent'
				: '#ffffff';
		});

		if (localStorage.getItem('transparencyDisabled') !== 'true') {
			soymojiDiv.style.backgroundColor = 'transparent';
		} else {
			soymojiDiv.style.backgroundColor = '#ffffff';
		}

		const img = document.createElement('img');
		img.src = `https://raw.githubusercontent.com/extteen/soyjakparty-enhanced/refs/heads/main/icons/soymoji/${filename}`;
		img.alt = shortcode;
		img.style.height = '30px';
		img.style.width = 'auto';

		const label = document.createElement('span');
		label.textContent = shortcode;
		label.style.fontSize = '10px';
		//label.style.fontWeight = 'bold';
		label.style.marginTop = '2px';
		label.style.wordBreak = 'break-all';

		soymojiDiv.appendChild(img);
		soymojiDiv.appendChild(label);
		soymojiMenu.appendChild(soymojiDiv);

		soymojiDiv.addEventListener('mouseenter', () => soymojiDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.35)');
		soymojiDiv.addEventListener('mouseleave', () => soymojiDiv.style.backgroundColor = 'transparent');
	});
	document.body.appendChild(soymojiMenu);

	window.addEventListener('transparencyChanged', updateAllTransparencyEffects);
	window.addEventListener('storage', (event) => {
		if (event.key === 'transparencyDisabled') updateAllTransparencyEffects();
	});
	updateAllTransparencyEffects();

	(function hookQuoteFunctionsWhenDefined() {
		function patchFunction(name) {
			const fn = window[name];
			if (typeof fn !== "function") return;

			window[name] = function (...args) {
				const result = fn.apply(this, args);
				requestAnimationFrame(tryEnhanceQuickReplyFields);
				return result;
			}
		}

		patchFunction('doQuote');
		patchFunction('citeReply');
	})();

	function enhanceTextbox(textbox) {
		if (!textbox || textbox.dataset.enhanced === "true") return;

		const wrapper = document.createElement('div');
		wrapper.classList.add('textbox-wrapper');
		textbox.parentNode.insertBefore(wrapper, textbox);
		wrapper.appendChild(textbox);
		wrapper.style.display = 'flex';
		wrapper.style.flexDirection = 'column';
		wrapper.style.alignItems = 'flex-start';
		wrapper.style.gap = '0px';

		const buttonColumn = document.createElement('div');
		buttonColumn.classList.add('button-column');
		buttonColumn.style.display = 'flex';
		buttonColumn.style.flexDirection = 'row';
		buttonColumn.style.gap = '10px';
		buttonColumn.style.width = '425px';
		wrapper.appendChild(buttonColumn);

		const soymojiButton = document.createElement('button');
		soymojiButton.classList.add("soymoji-button");
		soymojiButton.innerText = "☰ Soymoji";
		soymojiButton.type = "button";
		buttonColumn.appendChild(soymojiButton);

		const formatButton = document.createElement('button');
		formatButton.classList.add("format-button-toggle");
		formatButton.innerText = "☰ Text Format";
		formatButton.type = "button";
		buttonColumn.appendChild(formatButton);

		const searchButton = document.createElement('button');
		searchButton.classList.add("booru-search-button");
		searchButton.innerText = "🔎︎ Soybooru Search";
		searchButton.type = "button";
		buttonColumn.appendChild(searchButton);

		searchButton.addEventListener('click', () => {
			const targetTextbox = document.getElementById('body');

			if (targetTextbox && (targetTextbox.tagName === 'TEXTAREA' || targetTextbox.tagName === 'INPUT' || targetTextbox.isContentEditable)) {
				soybooruFloatingWindow.currentTextbox = targetTextbox;
			} else {
				soybooruFloatingWindow.currentTextbox = document.activeElement;
				if (soybooruFloatingWindow.currentTextbox && !(soybooruFloatingWindow.currentTextbox.tagName === 'TEXTAREA' || soybooruFloatingWindow.currentTextbox.tagName === 'INPUT' || soybooruFloatingWindow.currentTextbox.isContentEditable)) {
					soybooruFloatingWindow.currentTextbox = document.querySelector('textarea, input[type="text"], input[type="search"], [contenteditable="true"]');
				}
				if (!soybooruFloatingWindow.currentTextbox) {
					console.warn("No suitable text input or contenteditable element found on the page, even after trying to target #body.");
				}
			}

			soybooruFloatingWindow.style.display = 'flex';
			soybooruFloatingWindow.offsetHeight;

			floatingSearchInput.value = '';
			if (soybooruFloatingWindow.currentTextbox) {
				let targetName = soybooruFloatingWindow.currentTextbox.id || soybooruFloatingWindow.currentTextbox.name || soybooruFloatingWindow.currentTextbox.tagName.toLowerCase();
				floatingSearchResultsDisplay.innerHTML = `<p style="text-align: center; color: #888; grid-column: 1 / -1;">Enter tags and press Enter to search.`;
			} else {
				floatingSearchResultsDisplay.innerHTML = '<p style="text-align: center; color: #F44336; grid-column: 1 / -1;">No text input detected. Embed/Insert features may not work. Please click a text box before searching.</p>';
			}

			floatingLoadingIndicator.style.display = 'none';
			floatingSearchInput.focus();

			currentSearchTags = '';
			currentPageNumber = 1;
			pageNumberInput.value = currentPageNumber;
			prevPageButton.disabled = true;
			nextPageButton.disabled = true;
		});

		textbox.dataset.enhanced = "true";
	}

	function enhanceEmailTextbox(emailTextbox) {
		if (!emailTextbox) return;
		if (emailTextbox.dataset.enhanced === "true") return;

		const wrapper = document.createElement('div');
		wrapper.classList.add('email-textbox-wrapper');
		wrapper.style.position = 'relative';
		wrapper.style.display = 'inline-block';

		if (emailTextbox.parentNode) {
			emailTextbox.parentNode.insertBefore(wrapper, emailTextbox);
			wrapper.appendChild(emailTextbox);
		}

		emailTextbox.style.paddingRight = '30px';

		const dropdownBtn = document.createElement('button');
		dropdownBtn.classList.add('email-dropdown-button');
		dropdownBtn.type = 'button';
		dropdownBtn.textContent = '▼';
		dropdownBtn.style.position = 'absolute';
		dropdownBtn.style.right = '5px';
		dropdownBtn.style.top = '50%';
		dropdownBtn.style.transform = 'translateY(-50%)';
		dropdownBtn.style.border = 'none';
		dropdownBtn.style.background = 'transparent';
		dropdownBtn.style.cursor = 'pointer';
		dropdownBtn.style.padding = '2px';
		dropdownBtn.style.fontSize = '14px';
		dropdownBtn.style.zIndex = '10';
		wrapper.appendChild(dropdownBtn);

		const dropdownMenu = document.createElement('div');
		dropdownMenu.classList.add('email-dropdown-menu');
		dropdownMenu.style.position = 'absolute';
		dropdownMenu.style.top = '100%';
		dropdownMenu.style.left = '0';
		dropdownMenu.style.marginTop = '5px';
		dropdownMenu.style.background = '#fff';
		dropdownMenu.style.border = '1px solid #ccc';
		dropdownMenu.style.borderRadius = '4px';
		dropdownMenu.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
		dropdownMenu.style.display = 'none';
		dropdownMenu.style.zIndex = '9999';
		dropdownMenu.style.minWidth = '120px';
		dropdownMenu.style.padding = '5px 0';
		wrapper.appendChild(dropdownMenu);

		const options = [
			{ label: '(none)', value: '' },
			{ label: 'BUMP!', value: 'bump' },
			{ label: 'SAGE!', value: 'sage' },
			{ label: 'SUPERSAGE!', value: 'supersage' },
			{ label: 'Anonymous', value: 'anonymous' },
			{ label: 'Anonymous SAGE!', value: 'anonymous sage' },
			{ label: 'Nonoko', value: 'nonoko' }
		];

		options.forEach(opt => {
			const btn = document.createElement('button');
			btn.type = 'button';
			btn.textContent = opt.label;
			btn.style.display = 'block';
			btn.style.width = '100%';
			btn.style.padding = '6px 10px';
			btn.style.border = 'none';
			btn.style.background = 'white';
			btn.style.textAlign = 'left';
			btn.style.cursor = 'pointer';
			btn.style.fontSize = '13px';

			btn.addEventListener('mouseenter', () => {
				btn.style.background = '#eee';
			});
			btn.addEventListener('mouseleave', () => {
				btn.style.background = 'white';
			});

			btn.addEventListener('click', (e) => {
				e.preventDefault();
				e.stopImmediatePropagation();

				emailTextbox.value = opt.value;
				emailTextbox.focus();

				const events = ['input', 'change', 'keydown', 'keyup'];
				events.forEach(eventType => {
					emailTextbox.dispatchEvent(new Event(eventType, { bubbles: true }));
				});

				dropdownMenu.style.display = 'none';
			});

			dropdownMenu.appendChild(btn);
		});

		dropdownBtn.addEventListener('click', (e) => {
			e.preventDefault();
			e.stopPropagation();

			const isOpening = dropdownMenu.style.display === 'none';
			dropdownMenu.style.display = isOpening ? 'block' : 'none';

			if (isOpening) {
				document.querySelectorAll('.email-dropdown-menu').forEach(menu => {
					if (menu !== dropdownMenu) menu.style.display = 'none';
				});
				emailTextbox.focus();
			}
		});
		const handleOutsideClick = (e) => {
			if (!wrapper.contains(e.target) &&
				!e.target.classList.contains('email-dropdown-button') &&
				!e.target.classList.contains('email-dropdown-menu')) {
				dropdownMenu.style.display = 'none';
			}
		};

		document.addEventListener('click', handleOutsideClick);
		document.addEventListener('focusin', handleOutsideClick);

		emailTextbox.dataset.enhanced = "true";

		return () => {
			document.removeEventListener('click', handleOutsideClick);
			document.removeEventListener('focusin', handleOutsideClick);
		};
	}

	function tryEnhanceQuickReplyFields() {
		const quickReplyContainer = document.getElementById('quick-reply');

		if (quickReplyContainer) {
			setTimeout(() => {
				const body = quickReplyContainer.querySelector('textarea[name="body"]');
				const email = quickReplyContainer.querySelector('input[name="email"]');

				if (body && body.dataset.enhanced !== "true") enhanceTextbox(body);
				if (email && email.dataset.enhanced !== "true") enhanceEmailTextbox(email);
			}, 50);
		}
	}

	document.querySelectorAll('textarea[name="body"]:not([data-enhanced])').forEach(enhanceTextbox);
	document.querySelectorAll('input[name="email"]:not([data-enhanced])').forEach(enhanceEmailTextbox);

	const bodyObserver = new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type === 'childList') {
				for (const node of mutation.addedNodes) {
					if (node.nodeType === Node.ELEMENT_NODE) {
						if (node.id === 'quick-reply' && !node.dataset.observed) {
							node.dataset.observed = "true";
							tryEnhanceQuickReplyFields();

							const qrStyleObserver = new MutationObserver((styleMutations) => {
								for (const sMut of styleMutations) {
									if (sMut.type === 'attributes' && sMut.attributeName === 'style') {
										const isVisible = window.getComputedStyle(sMut.target).display !== 'none' &&
											window.getComputedStyle(sMut.target).visibility !== 'hidden';
										if (isVisible) {
											tryEnhanceQuickReplyFields();
										}
									}
								}
							});
							qrStyleObserver.observe(node, { attributes: true, attributeFilter: ['style'] });
						} else if (node.querySelector) {
							node.querySelectorAll('textarea[name="body"]:not([data-enhanced])').forEach(enhanceTextbox);
							node.querySelectorAll('input[name="email"]:not([data-enhanced])').forEach(enhanceEmailTextbox);
						}
					}
				}
			}

			if (mutation.type === 'attributes' && mutation.attributeName === 'style' && mutation.target.id === 'quick-reply') {
				const isVisible = window.getComputedStyle(mutation.target).display !== 'none' &&
					window.getComputedStyle(mutation.target).visibility !== 'hidden';
				if (isVisible) tryEnhanceQuickReplyFields();
			}
		}
	});

	bodyObserver.observe(document.body, {
		childList: true,
		subtree: true,
		attributes: true,
		attributeFilter: ['style', 'class']
	});



	document.addEventListener('click', (event) => {
		if (event.target && event.target.classList.contains('soymoji-button')) {
			event.preventDefault();
			event.stopPropagation();
			const textbox = event.target.closest('.textbox-wrapper')?.querySelector('textarea[name="body"]');

			if (textbox && soymojiMenu) {
				const rect = event.target.getBoundingClientRect();
				soymojiMenu.style.left = `${rect.right + 10}px`;
				soymojiMenu.style.top = `${rect.top + window.scrollY}px`;
				soymojiMenu.style.display = soymojiMenu.style.display === 'none' ? 'grid' : 'none';
				soymojiMenu.dataset.activeTextboxId = textbox.id || (textbox.id = `textbox-${Date.now()}`);
			}
		}

		if (event.target && event.target.classList.contains('format-button-toggle')) {
			event.preventDefault();
			event.stopPropagation();
			const formatMenu = document.getElementById('text-format-menu');

			if (formatMenu) {
				const rect = event.target.getBoundingClientRect();
				formatMenu.style.left = `${rect.right + 10}px`;
				formatMenu.style.top = `${rect.top + window.scrollY}px`;
				formatMenu.style.display = formatMenu.style.display === 'none' ? 'block' : 'none';

				const textbox = event.target.closest('.textbox-wrapper')?.querySelector('textarea[name="body"]');
				if (textbox) {
					formatMenu.dataset.activeTextboxId = textbox.id || (textbox.id = `textbox-${Date.now()}-main`);
				}
			}
		}

		if (event.target && event.target.classList.contains('booru-search-button')) {
			event.preventDefault();
			event.stopPropagation();


			const searchContainer = event.target.closest('.textbox-wrapper')?.querySelector('.soybooru-search-container');
			const searchInput = searchContainer?.querySelector('.soybooru-search-input');

			if (searchContainer && searchInput) {
				let searchUIVisible = searchContainer.style.display !== 'none';
				searchUIVisible = !searchUIVisible;

				if (searchUIVisible) {
					searchContainer.style.display = 'flex';
					searchInput.focus();
				} else {
					searchContainer.style.display = 'none';
				}
			}
		}


		if (event.target && event.target.classList.contains('email-dropdown-button')) {
			event.preventDefault();
			event.stopImmediatePropagation();

			const wrapper = event.target.closest('.email-textbox-wrapper');
			if (!wrapper) return;

			const dropdownMenu = wrapper.querySelector('.email-dropdown-menu');
			const emailTextbox = wrapper.querySelector('input[name="email"]');

			if (!dropdownMenu || !emailTextbox) return;

			document.querySelectorAll('.email-dropdown-menu').forEach(menu => {
				if (menu !== dropdownMenu) menu.style.display = 'none';
			});

			const isOpening = dropdownMenu.style.display === 'none';
			dropdownMenu.style.display = isOpening ? 'block' : 'none';

			if (isOpening) {
				emailTextbox.focus();
			}
		}

		if (event.target && event.target.closest('.email-dropdown-menu button')) {
			event.preventDefault();
			event.stopImmediatePropagation();

			const optionButton = event.target.closest('button');
			const wrapper = optionButton.closest('.email-textbox-wrapper');
			if (!wrapper) return;

			const dropdownMenu = wrapper.querySelector('.email-dropdown-menu');
			const emailTextbox = wrapper.querySelector('input[name="email"]');

			if (!emailTextbox) return;

			const options = Array.from(dropdownMenu.querySelectorAll('button'));
			const index = options.indexOf(optionButton);
			if (index === -1) return;

			const values = ['', 'bump', 'sage', 'supersage', 'anonymous', 'anonymous sage', 'nonoko'];
			if (values[index] !== undefined) {
				emailTextbox.value = values[index];

				const inputEvent = new Event('input', { bubbles: true });
				const changeEvent = new Event('change', { bubbles: true });
				emailTextbox.dispatchEvent(inputEvent);
				emailTextbox.dispatchEvent(changeEvent);
			}

			dropdownMenu.style.display = 'none';
			emailTextbox.focus();
		}


		if (event.target && event.target.closest('.soymoji-option')) {
			event.preventDefault();
			event.stopPropagation();

			const soymojiDiv = event.target.closest('.soymoji-option');
			const shortcode = soymojiDiv.querySelector('span')?.textContent;
			const soymojiMenu = document.querySelector('.soymoji-menu');

			const activeTextboxId = soymojiMenu?.dataset.activeTextboxId;
			const textbox = activeTextboxId ? document.getElementById(activeTextboxId) : null;

			if (shortcode && textbox) {
				const start = textbox.selectionStart || 0;
				const end = textbox.selectionEnd || 0;
				const text = textbox.value;
				textbox.value = text.slice(0, start) + `[${shortcode}]` + text.slice(end);
				textbox.focus();
				window.livePreview.updateCounter();

				textbox.selectionStart = textbox.selectionEnd = start + `[${shortcode}]`.length;
			}
		}

		if (event.target && event.target.classList.contains('format-button')) {
			const button = event.target;
			const formatMenu = document.getElementById('text-format-menu');

			const activeTextboxId = formatMenu?.dataset.activeTextboxId;
			let textbox = activeTextboxId ? document.getElementById(activeTextboxId) : null;

			if (!textbox || textbox.tagName !== 'TEXTAREA' || textbox.name !== 'body') {
				textbox = document.activeElement;
				if (!textbox || textbox.tagName !== 'TEXTAREA' || textbox.name !== 'body') {
					textbox = document.querySelector('#quick-reply textarea[name="body"]');
				}
				if (!textbox) {
					textbox = document.querySelector('textarea[name="body"]');
				}
			}

			if (!textbox) return;

			let formatDetails = null;
			for (const tier of formatTiers) {
				formatDetails = tier.formats.find(f => f.label === button.innerText);
				if (formatDetails) break;
			}

			if (formatDetails) {
				const start = textbox.selectionStart;
				const end = textbox.selectionEnd;
				const selectedText = textbox.value.slice(start, end);

				const formatted = formatDetails.open + selectedText + formatDetails.close;
				textbox.value = textbox.value.slice(0, start) + formatted + textbox.value.slice(end);

				const cursorPos = selectedText
					? start + formatDetails.open.length + selectedText.length
					: start + formatDetails.open.length;

				textbox.selectionStart = textbox.selectionEnd = cursorPos;
				textbox.focus();
				window.livePreview.updateCounter();
			}
		}
	});

	document.addEventListener('click', (e) => {
		const formatMenu = document.getElementById('text-format-menu');
		if (formatMenu && formatMenu.style.display !== 'none' && !formatMenu.contains(e.target) && !e.target.classList.contains('format-button-toggle')) {
			formatMenu.style.display = 'none';
		}

		const soymojiMenu = document.querySelector('.soymoji-menu');
		if (soymojiMenu && soymojiMenu.style.display !== 'none' && !soymojiMenu.contains(e.target) && !e.target.classList.contains('soymoji-button')) {
			soymojiMenu.style.display = 'none';
		}

		document.querySelectorAll('.email-textbox-wrapper').forEach(wrapper => {
			const dropdownMenu = wrapper.querySelector('.email-dropdown-menu');
			const dropdownBtn = wrapper.querySelector('.email-dropdown-button');
			if (dropdownMenu && dropdownMenu.style.display !== 'none' && !wrapper.contains(e.target) && e.target !== dropdownBtn) {
				dropdownMenu.style.display = 'none';
			}
		});
	});


	// Text Previews from a random soyteen's modified userscript. thanks

	const DEFAULTS = {
		lp_attach: 'true',
		lp_enablePreview: 'true',
		lp_enableCounter: 'false',
		lp_forcePreviewText: 'false'
	};

	const flags = {
		get(key) {
			const v = localStorage.getItem(key);
			return v === null ? DEFAULTS[key] : v;
		},
		set(key, value) {
			localStorage.setItem(key, String(value));
		}
	};

	const ATTACH_ATTR = 'data-live-preview-attached';

	const state = {
		textarea: null,
		wrapper: null,
		previewBox: null,
		previewBtn: null,
		resizeObserver: null,
		soymojiAvailable: (typeof soymojiFiles !== 'undefined'),
		codeToFile: {},
		destroyed: false
	};

	function buildSoyMap() {
		if (!state.soymojiAvailable) return;
		const soymojiBasePath = 'icons/soymoji';
		state.codeToFile = {};
		soymojiFiles.forEach(fn => {
			if (typeof fn !== 'string') return;
			const name = fn.replace(/\.[^/.]+$/, '').toLowerCase();
			if (!state.codeToFile[name]) state.codeToFile[name] = fn;
		});
		if (state.codeToFile['baby'] && !state.codeToFile['babyjak']) state.codeToFile['babyjak'] = state.codeToFile['baby'];
		if (state.codeToFile['slf'] && !state.codeToFile['selfish']) state.codeToFile['selfish'] = state.codeToFile['slf'];
	}

	function soymojiImgHTML(codeRaw) {
		if (!state.soymojiAvailable) return null;
		const code = String(codeRaw).toLowerCase();
		const file = state.codeToFile[code];
		if (!file) return null;
		const src = extUrlFor('icons/soymoji/' + file);
		return `<img src="${src}" alt="[${codeRaw}]" title="${codeRaw}" decoding="async"
            style="height:auto; width:auto; image-rendering:pixelated; display:inline; margin:0; padding:0;" />`;
	}


	function applyFormatting(text) {
		const temp = document.createElement('div');
		const lines = text.split('\n');

		for (let i = 0; i < lines.length; i++) {
			let line = lines[i];
			let span = document.createElement('span');
			let arrowPrefix = '';

			if (line.startsWith('>')) {
				arrowPrefix = '>';
				line = line.substring(1);
				span.style.color = '#789922';
			} else if (line.startsWith('<')) {
				arrowPrefix = '<';
				line = line.substring(1);
				span.style.color = '#F6750B';
			} else if (line.startsWith('^')) {
				arrowPrefix = '^';
				line = line.substring(1);
				span.style.color = '#6577E6';
			}

			line = line.replace(/~-~(.*?)~-~/g, function (match, p1) {
				let inner = p1;
				inner = inner.replace(/==([^=]+)==/g, '<span style="font-weight:bold">$1</span>');
				inner = inner.replace(/--([^-]+)--/g, '<span style="font-weight:bold">$1</span>');
				inner = inner.replace(/-=([^-]+)-=/g, '<span style="font-weight:bold">$1</span>');
				inner = inner.replace(/%%(.*?)%%/g, '<span style="text-shadow:0 0 5px #0f0">$1</span>');
				inner = inner.replace(/::(.*?)::/g, '<span style="text-shadow:0 0 5px #ff0">$1</span>');
				inner = inner.replace(/!!(.*?)!!/g, '<span style="text-shadow:0 0 5px #f00">$1</span>');
				inner = inner.replace(/;;(.*?);;/g, '<span style="text-shadow:0 0 5px #0ff">$1</span>');
				return `<span style="background:linear-gradient(90deg,violet,blue,cyan,green,yellow,orange,red);-webkit-background-clip:text;color:transparent;display:inline-block">${inner}</span>`;
			});

			line = line.replace(/==([^=]+)==/g, '<span style="color:#AF0A0F;font-weight:bold">$1</span>');
			line = line.replace(/--([^-]+)--/g, '<span style="color:#2424AD;font-weight:bold">$1</span>');
			line = line.replace(/-=([^-]+)-=/g, '<span style="color:#720B98;font-weight:bold">$1</span>');

			line = line.replace(/==\+=(.+?)=\+==/g, '<span style="color:#AF0A0F;font-weight:bold;font-size:115%">$1</span>');
			line = line.replace(/--\+=(.+?)=\+--/g, '<span style="color:#2424AD;font-weight:bold;font-size:115%">$1</span>');
			line = line.replace(/-=\+=(.+?)=\+-=/g, '<span style="color:#720B98;font-weight:bold;font-size:115%">$1</span>');

			line = line.replace(/\+=([^+]+)=\+/g, '<span style="font-size:115%">$1</span>');
			line = line.replace(/\(\(\(([^)]+)\)\)\)/g, '<span style="color:#3060A8;background:white">((($1)))</span>');
			line = line.replace(/-~-([^-]+)-~-/g, '<span style="color:#FD3D98">$1</span>');

			line = line.replace(/%%([^%]+)%%/g, '<span style="text-shadow:0 0 5px #0f0">$1</span>');
			line = line.replace(/::([^:]+)::/g, '<span style="text-shadow:0 0 5px #ff0">$1</span>');
			line = line.replace(/!!([^!]+)!!/g, '<span style="text-shadow:0 0 5px #f00">$1</span>');
			line = line.replace(/;;([^;]+);;/g, '<span style="text-shadow:0 0 5px #0ff">$1</span>');

			line = line.replace(/'''([^']+)'''/g, '<b>$1</b>');
			line = line.replace(/''([^']+)''/g, '<i>$1</i>');
			line = line.replace(/~~([^~]+)~~/g, '<s>$1</s>');
			line = line.replace(/\*\*([^*]+)\*\*/g, '<span style="background:black;color:black" onmouseover="this.style.color=\'white\'" onmouseout="this.style.color=\'black\'">$1</span>');
			line = line.replace(/__([^_]+)__/g, '<u>$1</u>');
			line = line.replace(/```([^`]+)```/g, '<code>$1</code>');

			line = line.replace(/\[([^\]]+)\]/g, function (match, p1) {
				const img = soymojiImgHTML(p1);
				return img ? img : `[${p1}]`;
			});

			if (arrowPrefix) {
				const arrowSpan = document.createElement('span');
				arrowSpan.textContent = arrowPrefix;
				arrowSpan.style.color = span.style.color;
				temp.appendChild(arrowSpan);
			}

			span.innerHTML = line || '&nbsp;';
			temp.appendChild(span);
			if (i < lines.length - 1) temp.appendChild(document.createElement('br'));
		}

		return temp.innerHTML;
	}

	function attachToTextarea(textarea) {
		if (!textarea || textarea.hasAttribute(ATTACH_ATTR)) return null;

		textarea.style.minWidth = '420px';
		textarea.style.minHeight = '120px';

		const wrapper = document.createElement('div');
		wrapper.className = 'live-preview-wrapper';
		wrapper.style.position = 'relative';
		wrapper.style.display = 'inline-block';

		textarea.parentNode.replaceChild(wrapper, textarea);
		wrapper.appendChild(textarea);

		textarea.style.display = 'block';
		textarea.style.boxSizing = 'border-box';
		textarea.style.position = 'relative';
		textarea.style.zIndex = '1';

		const previewBtn = document.createElement('button');
		previewBtn.id = 'preview-button';
		previewBtn.type = 'button';
		previewBtn.tabIndex = 0;

		Object.assign(previewBtn.style, {
			position: 'absolute',
			right: '9px',
			bottom: '9px',
			padding: '2px 6px',
			borderRadius: '4px',
			border: '1px solid rgba(0,0,0,0.2)',
			background: 'white',
			backdropFilter: 'blur(4px)',
			cursor: 'pointer',
			zIndex: '32',
			fontSize: '11px',
			color: '#222',
			boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
		});

		const previewBox = document.createElement('div');
		previewBox.id = 'live-preview';
		Object.assign(previewBox.style, {
			position: 'absolute',
			top: '0',
			left: '0',
			width: '100%',
			overflowY: 'auto',
			background: 'rgba(255,255,255,0.95)',
			border: '1px solid #999',
			padding: '6px',
			boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
			zIndex: '16',
			display: 'none',
			boxSizing: 'border-box'
		});

		wrapper.appendChild(previewBtn);
		wrapper.appendChild(previewBox);

		textarea.setAttribute(ATTACH_ATTR, 'true');

		function syncPreviewSize() {
			const h = textarea.offsetHeight;
			previewBox.style.height = h + 'px';
			previewBox.style.top = '0';
		}
		syncPreviewSize();

		let ro;
		if (typeof ResizeObserver !== 'undefined') {
			try {
				ro = new ResizeObserver(syncPreviewSize);
				ro.observe(textarea);
				ro.observe(wrapper);
			} catch (e) {
				window.addEventListener('resize', syncPreviewSize);
			}
		} else {
			window.addEventListener('resize', syncPreviewSize);
		}

		function showPreviewLocal() {
			syncPreviewSize();
			previewBox.style.display = 'block';
			renderPreview();
		}
		function hidePreviewLocal() {
			previewBox.style.display = 'none';
		}
		previewBtn.addEventListener('mouseleave', function () {
			setTimeout(() => {
				if (!previewBtn.matches(':hover') && document.activeElement !== previewBtn) {
					hidePreviewLocal();
				}
			}, 50);
		});

		previewBtn.addEventListener('blur', function () {
			setTimeout(() => {
				if (!previewBtn.matches(':hover') && document.activeElement !== previewBtn) {
					hidePreviewLocal();
				}
			}, 50);
		});

		previewBox.tabIndex = -1;
		previewBox.addEventListener('keydown', function (ev) {
			if (ev.key === 'Escape') {
				hidePreviewLocal();
				previewBtn.focus();
			}
		});

		function renderPreview() {
			const text = textarea.value;
			previewBox.innerHTML = text ? applyFormatting(text) : '<i>Text formatting preview...</i>';
		}

		return {
			wrapper,
			textarea,
			previewBtn,
			previewBox,
			syncPreviewSize,
			renderPreview,
			resizeObserver: ro,
			showPreview: showPreviewLocal,
			hidePreview: hidePreviewLocal
		};
	}

	function computeCounts(text) {
		const chars = text.length;

		const lines = text.length === 0 ? 0 : text.split('\n').length;
		return { chars, lines };
	}

	function updateLabelFor(inst) {
		if (!inst || !inst.previewBtn || !inst.textarea) return;
		const enablePreview = flags.get('lp_enablePreview') === 'true';
		const enableCounter = flags.get('lp_enableCounter') === 'true';
		const forcePreviewText = flags.get('lp_forcePreviewText') === 'true';

		const text = inst.textarea.value || '';
		const { chars, lines } = computeCounts(text);

		if (forcePreviewText) {
			inst.previewBtn.textContent = 'Preview';
		} else if (enableCounter && !enablePreview) {
			inst.previewBtn.textContent = `${chars} | ${lines}`;
		} else if (enableCounter && enablePreview) {
			inst.previewBtn.textContent = `${chars} | ${lines}`;
		} else {
			inst.previewBtn.textContent = 'Preview';
		}
	}

	function applyFeatureState(inst) {
		if (!inst) return;

		const enablePreview = flags.get('lp_enablePreview') === 'true';
		const enableCounter = flags.get('lp_enableCounter') === 'true';

		if (!enablePreview && !enableCounter) {
			inst.previewBtn.style.display = 'none';
			inst.previewBox.style.display = 'none';
			return;
		} else {
			inst.previewBtn.style.display = '';
		}

		if (enableCounter && !enablePreview) {
			inst.previewBtn.style.background = 'transparent';
			inst.previewBtn.style.border = 'none';
			inst.previewBtn.style.boxShadow = 'none';
		} else {
			inst.previewBtn.style.background = 'white';
			inst.previewBtn.style.border = '1px solid rgba(0,0,0,0.2)';
			inst.previewBtn.style.boxShadow = '0 1px 2px rgba(0,0,0,0.1)';
		}

		if (enablePreview) {
			if (!inst._previewHandlersAttached) {
				const handler = function () {
					if (typeof inst.showPreview === 'function') inst.showPreview();
					else {
						inst.syncPreviewSize();
						inst.previewBox.style.display = 'block';
						inst.renderPreview();
					}
				};
				inst._previewHandlerFunc = handler;
				inst.previewBtn.addEventListener('mouseenter', handler);
				inst.previewBtn.addEventListener('focus', handler);
				inst._previewHandlersAttached = true;
			}
		} else {
			if (inst._previewHandlersAttached) {
				try {
					inst.previewBtn.removeEventListener('mouseenter', inst._previewHandlerFunc);
					inst.previewBtn.removeEventListener('focus', inst._previewHandlerFunc);
				} catch (e) { }
				inst._previewHandlersAttached = false;
				inst._previewHandlerFunc = null;
			}
			inst.previewBox.style.display = 'none';
		}

		updateLabelFor(inst);

		if (!inst._inputHandlerAttached) {
			const onInput = function () {
				updateLabelFor(inst);
				if (flags.get('lp_enablePreview') === 'true' && inst.previewBox.style.display !== 'none') {
					inst.renderPreview();
				}
			};
			inst.textarea.addEventListener('input', onInput);
			inst._inputHandlerAttached = true;
			inst._onInput = onInput;
		}

		inst.updateCounter = function () {
			updateLabelFor(inst);
		};
		inst.updateLabel = function () {
			updateLabelFor(inst);
		};
	}


	function init() {
		if (localStorage.getItem('noPreviewText') === 'true') {
			return;
		}

		if (flags.get('lp_attach') !== 'true') return;

		const textarea = document.querySelector('#body');
		if (!textarea) return;

		buildSoyMap();

		const inst = attachToTextarea(textarea);
		if (!inst) return;

		state.textarea = inst.textarea;
		state.wrapper = inst.wrapper;
		state.previewBtn = inst.previewBtn;
		state.previewBox = inst.previewBox;
		state.resizeObserver = inst.resizeObserver;

		applyFeatureState(inst);

		const updateHandler = function () {
			if (inst.updateCounter) inst.updateCounter();
			if (inst.previewBox.style.display !== 'none') inst.renderPreview();
		};
		inst.textarea.addEventListener('livePreview:update', updateHandler);

		window.livePreview = window.livePreview || {};
		window.livePreview._instance = inst;
		window.livePreview.updateCounter = function () {
			updateHandler();
		};
		window.livePreview.setFlags = function (newFlags = {}) {
			Object.keys(newFlags).forEach(k => {
				if (k in DEFAULTS) {
					flags.set(k, String(newFlags[k]));
				}
			});
			applyFeatureState(inst);
		};
		window.livePreview.destroy = function () {
			destroy();
		};
		window.livePreview.init = function () {
			applyFeatureState(inst);
		};

		window.livePreview.triggerUpdateEvent = function () {
			const ev = new Event('livePreview:update');
			if (inst && inst.textarea) inst.textarea.dispatchEvent(ev);
		};
	}

	function destroy() {
		const inst = window.livePreview && window.livePreview._instance;
		if (!inst || state.destroyed) return;
		try { inst.textarea.removeAttribute(ATTACH_ATTR); } catch (e) { }
		if (inst.wrapper && inst.textarea) {
			try {
				inst.wrapper.parentNode.replaceChild(inst.textarea, inst.wrapper);
			} catch (e) { }
		}
		try { if (inst.previewBtn && inst.previewBtn.parentNode) inst.previewBtn.parentNode.removeChild(inst.previewBtn); } catch (e) { }
		try { if (inst.previewBox && inst.previewBox.parentNode) inst.previewBox.parentNode.removeChild(inst.previewBox); } catch (e) { }
		if (inst.resizeObserver) {
			try { inst.resizeObserver.disconnect(); } catch (e) { }
		}
		if (inst._inputHandlerAttached && inst._onInput) {
			try { inst.textarea.removeEventListener('input', inst._onInput); } catch (e) { }
		}
		state.destroyed = true;
		window.livePreview = null;
	}

	try {
		const existing = document.querySelector('#preview-button');
		if (!existing) init();
	} catch (e) {
		console.error('live-preview init failed', e);
	}

	window.livePreview = window.livePreview || {};
	window.livePreview.setFlags = window.livePreview.setFlags || function (newFlags = {}) {
		Object.keys(newFlags).forEach(k => {
			if (k in DEFAULTS) localStorage.setItem(k, String(newFlags[k]));
		});
		if (window.livePreview._instance) {
			window.livePreview._instance && (window.livePreview._instance.updateCounter && window.livePreview._instance.updateCounter());
			if (window.livePreview._instance) {
				if (typeof window.livePreview.init === 'function') window.livePreview.init();
			}
		}
	};

	// main page tweaks
	if (window.location.hostname === 'soyjak.st' && window.location.pathname === '/') {
		createSoyspherePanel();
		removeSisterSites();
		addHappeningsLink();
	}

	function removeSisterSites() {
		const sisterSitesElem = document.querySelector('li.sister-sites');
		if (sisterSitesElem) {
			sisterSitesElem.remove();
		}
	}

	function addHappeningsLink() {
		const currentYear = new Date().getFullYear();
		const linkUrl = `https://wiki.soyjak.st/Happenings/${currentYear}`;

		const container = document.createElement('div');
		container.style.display = 'flex';
		container.style.zIndex = '1';
		container.style.flexDirection = 'column';
		container.style.alignItems = 'center';
		container.style.marginTop = '10px';

		const title = document.createElement('div');
		title.textContent = `Happenings of ${currentYear}`;
		title.style.color = 'black';
		title.style.fontSize = '10px';
		title.style.marginBottom = '2px';
		title.style.textAlign = 'center';
		title.style.userSelect = 'none';

		const link = document.createElement('a');
		link.href = linkUrl;
		link.target = '_blank';
		link.rel = 'noopener noreferrer';

		const img = document.createElement('img');
		img.src = extUrlFor('icons/happenings.webp');
		img.alt = `Happenings ${currentYear}`;
		img.style.width = 'auto';
		img.style.height = '50px';
		img.style.cursor = 'pointer';

		container.appendChild(title);
		link.appendChild(img);
		container.appendChild(link);

		const panel = document.getElementById('soysphere-panel-ext-simple');
		if (panel) {
			panel.appendChild(container);
		} else {
			document.body.appendChild(container);
		}
	}

	function createSoyspherePanel() {
		const panel = document.createElement('div');
		panel.id = 'soysphere-panel-ext-simple';

		const imageTextContainer = document.createElement('div');
		imageTextContainer.id = 'soysphere-image-text-container-ext-simple';

		const sphereImage = document.createElement('img');
		try {
			sphereImage.src = extUrlFor('icons/mainpage/sphere.png');
		} catch (e) {
			sphereImage.src = '';
			sphereImage.alt = 'Sphere image not loaded';
		}
		sphereImage.alt = 'Soysphere';
		sphereImage.id = 'soysphere-image-ext-simple';

		const soysphereText = document.createElement('div');
		soysphereText.id = 'soysphere-text-ext-simple';
		soysphereText.textContent = 'The Soysphere';

		imageTextContainer.appendChild(sphereImage);
		imageTextContainer.appendChild(soysphereText);
		panel.appendChild(imageTextContainer);

		const linksContainer = document.createElement('div');
		linksContainer.id = 'soysphere-links-container-ext-simple';

		const links = [
			{ text: 'Soybooru', href: 'https://soybooru.com/', icon: 'icons/mainpage/booru.png' },
			{ text: 'Soyjak Wiki', href: 'https://wiki.soyjak.st/', icon: 'icons/mainpage/wiki.png' },
			{ text: 'The Soysylum', href: 'https://soysylum.org/Main_Page', icon: 'icons/mainpage/soysylum.png' },
			{ text: 'The Dailyjak', href: 'https://t.me/thedailyjak', icon: 'icons/mainpage/dailyjak.jpg' }
		];

		links.forEach(linkInfo => {
			const linkElement = document.createElement('a');
			linkElement.href = linkInfo.href;
			if (linkInfo.href !== '#') {
				linkElement.target = '_blank';
				linkElement.rel = 'noopener noreferrer';
			}

			const iconElement = document.createElement('img');
			try {
				iconElement.src = extUrlFor(linkInfo.icon);
			} catch (e) {
				iconElement.src = '';
				iconElement.alt = 'icon';
			}
			iconElement.classList.add('soysphere-link-icon');

			const textSpan = document.createElement('span');
			textSpan.textContent = linkInfo.text;

			linkElement.appendChild(iconElement);
			linkElement.appendChild(textSpan);
			linksContainer.appendChild(linkElement);
		});

		panel.appendChild(linksContainer);

		document.body.appendChild(panel);

		const css = `
      #soysphere-panel-ext-simple {
          position: fixed;
          top: 40px;
          right: 200px;
          width: auto;
          background-color: transparent;
          border: none;
          box-shadow: none;
          padding: 0;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 5px;
      }

      #soysphere-image-text-container-ext-simple {
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 5px;
          width: auto;
          height: auto;
          flex-shrink: 0;
      }

      #soysphere-image-ext-simple {
          width: 50px;
          height: 50px;
          object-fit: contain;
          /* border-radius: 50%; (kept removed as per previous request) */
      }

      #soysphere-text-ext-simple {
          position: static;
          transform: none;
          top: auto;
          left: auto;
          color: white;
          font-size: 20px;
          font-weight: bold;
          text-shadow: 1px 1px 2px black, 0 0 3px black;
          text-align: right;
          white-space: nowrap;
          pointer-events: auto;
          width: auto;
      }

      #soysphere-links-container-ext-simple {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
      }

      #soysphere-links-container-ext-simple a {
          background-color: transparent;
          border: none;
          padding: 1px 0;
          margin-bottom: 4px;
          font-size: 15px;
          text-decoration: underline;

          display: flex;
          align-items: center;
          gap: 5px;
      }

      .soysphere-link-icon {
          width: 16px;
          height: 16px;
          object-fit: contain;
          flex-shrink: 0;
      }

      #soysphere-links-container-ext-simple a:hover {
          /* color: #0056b3; */
          /* text-decoration: none; */
      }

      #soysphere-links-container-ext-simple a:last-child {
          margin-bottom: 0;
      }
    `;

		const styleSheet = document.createElement("style");
		styleSheet.type = "text/css";
		styleSheet.innerText = css;
		document.head.appendChild(styleSheet);
	}
})();