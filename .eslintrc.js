/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */

module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['custom'],
  settings: {
    next: {
      rootDir: ['apps/*/']
    }
  }
}
