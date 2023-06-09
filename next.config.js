/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	experimental: {
		/**
		 * Explicitly exclude `content` folder from standalone output in `.next/standalone`.
		 */
		// outputFileTracingExcludes: {
		// 	"**/*": ["./content/**/*"]
		// }
	}
}

module.exports = nextConfig
