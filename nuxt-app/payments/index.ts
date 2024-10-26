import { defineNuxtModule } from "@nuxt/kit";
import { resolve } from "path";

export default defineNuxtModule({
	meta: {
		name: "payments",
		configKey: "payments",
	},

	setup(moduleOptions, nuxt) {
		const themeDir = resolve(__dirname, "..");

		nuxt.hook("pages:extend", (pages) => {
			pages.push(
				{
					name: "paymentsTestPage",
					path: "/payments/test/page/90785634",
					file: resolve(
						themeDir,
						"payments/pages/startPayment/testPayments.vue"
					),
				},
				{
					name: "paymentSuccessed",
					path: "/payment/success",
					file: resolve(
						themeDir,
						"payments/pages/paymentStatus/paymentSuccessed.vue"
					),
				},
				{
					name: "paymentFailed",
					path: "/payment/fail",
					file: resolve(
						themeDir,
						"payments/pages/paymentStatus/paymentFailed.vue"
					),
				}
			);
		});

		nuxt.hook("imports:dirs", (dirs) => {
			dirs.push(resolve(__dirname, "stores"));
		});
	},
});