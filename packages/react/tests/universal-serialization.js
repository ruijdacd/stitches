import createCss from '../src/index.js'

describe('Serialization', () => {
	const sheet = createCss()
	const { styled, getCssString, toString, theme } = sheet

	const myComponent = styled('button', {
		all: 'unset',
		font: 'inherit',
		margin: 0,
		padding: '0.5em 1em',
	})
	const myComponentSelector = '.sxyvi1f'

	const myTheme = theme({
		colors: {
			blue: 'dodgerblue',
		},
	})
	const myThemeClass = 'sx7guyg'
	const myThemeSelector = `.${myThemeClass}`

	test('Components implicitly return their selector', () => {
		expect(String(myComponent)).toBe(myComponentSelector)
		expect('' + myComponent).toBe(myComponentSelector)
		expect(`${myComponent}`).toBe(myComponentSelector)
	})

	test('Components can explicitly return their selector', () => {
		expect(myComponent.selector).toBe(myComponentSelector)
		expect(myComponent.toString()).toBe(myComponentSelector)
	})

	test('Themes implicitly return their className', () => {
		expect(String(myTheme)).toBe(myThemeClass)
		expect('' + myTheme).toBe(myThemeClass)
		expect(`${myTheme}`).toBe(myThemeClass)
	})

	test('Themes can explicitly return their className', () => {
		expect(myTheme.className).toBe(myThemeClass)
		expect(myTheme.toString()).toBe(myThemeClass)
	})

	test('Themes can explicitly return their selector', () => {
		expect(myTheme.selector).toBe(myThemeSelector)
	})

	myComponent.render()

	const sheetCssText = `${myThemeSelector}{--colors-blue:dodgerblue;}${myComponentSelector}{all:unset;font:inherit;margin:0;padding:0.5em 1em;}`

	test('Sheets implicitly return their cssText', () => {
		expect(String(sheet)).toBe(sheetCssText)
		expect('' + sheet).toBe(sheetCssText)
		expect(`${sheet}`).toBe(sheetCssText)
	})

	test('Sheets can explicitly return their cssText', () => {
		expect(getCssString()).toBe(sheetCssText)
		expect(toString()).toBe(sheetCssText)
	})
})
