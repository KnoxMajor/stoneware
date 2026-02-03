// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://knoxmajor.github.io',
	base: process.env.CI ? '/stoneware/' : '/',
});
