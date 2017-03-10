# Example Project

<!-- Edit this file to fit your project after cloning or forking the theme repo. -->

This is an example README for new projects using the Zilker Theme. To set up a new site using Zilker, first follow the instructions at https://cityofaustin.github.io/zilker-theme/, then edit this file in your project's repository.

## Contributing

To learn about how this site is set up, and how to edit it, read the [GitHub Pages guide].

[GitHub Pages guide]: http://guides.austintexas.io/github-pages/

## Theme

<!-- Keep this section if you think you might want to update the theme in the future. -->

This site is based on the [Zilker Theme]. In most cases, it probably started as a clone of the theme's repository, which means that you can update the theme files using `git merge`:

```
$ git checkout -b theme-update
$ git remote add zilker https://github.com/cityofaustin/zilker-theme.git
$ git fetch zilker
$ git merge zilker/master
```

Note: merging theme updates in this way is only likely to succeed if the theme files haven't changed in this project. If they have, you may need to resolve merge conflicts to proceed, which requires an intermediate understanding of Git.

[Zilker Theme]: https://github.com/cityofaustin/zilker-theme
