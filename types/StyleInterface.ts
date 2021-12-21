export interface StyleInterface {
	color: {
		body: {
			bg: string
		}
		sidebar: {
			bg: string
		}
		form: {
			bg: string
			fieldBg: string
			fieldBorder: string
		}
		btn: {
			secondary: {
				bg: string
				hover: string
				text: string
			}
			tertiary: {
				bg: string
				hover: string
				text: string
			}
			quaternary: {
				bg: string
				hover: string
				text: string
			}
		}
		invoiceItem: {
			bg: string
		}
		invoiceStatus: {
			bg: string
			text: string
		}
		invoiceTable: {
			bg: string
			footerBg: string
		}
		popup: {
			bg: string
		}
		dropdown: {
			bg: string
			shadow: string
		}
		checkbox: {
			bg: string
		}
		text: {
			heading: string
			bodyA: string
			bodyB: string
			formLabel: string
			link: string
			linkHover: string
			placeholder: string
		}
	}
	icon: {
		path: string
		alt: string
	}
}
