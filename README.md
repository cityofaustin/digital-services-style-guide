# :construction: WIP :construction: Zilker Jekyll Theme

Zilker is a work-in-progress Jekyll theme for City of Austin websites.

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-theme-zilker", github: "cityofaustin/zilker-theme"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-theme-zilker
```

And then execute:

    $ bundle

## Usage

### Navigation

Zilker generates site-wide navigation automatically, with zero configuration. The primary "global" navigation renders Jekyll's `site.pages` sorted by URL and optionally by a `position` front-matter property, if set.

Pages in subfolders, like `parent/child.md`, render as visual children of their parent, e.g. `parent.md`. The parent page must exist for the child page to appear in the navigation.

The navigation logic is recursive, and works with deeply nested children, but exceeding two levels is not recommended.

### Collections

Zilker also supports per-section sub-navigation using Jekyll [Collections]. Given a collection named `example`, each document in [_example/](_example/) will include navigation to the other documents in the collection when output.

To show a collection in the primary navigation, Zilker looks for a "collection index" page at the site root, e.g. [example.md](example.md). The page's front-matter must include a `collection` property matching the collection key in [_config.yml](_config.yml), and its permalink must match the collection's.

Sorting and parent-child relationships work the same way in a collection's sub-navigation as in the primary navigation.

[Collections]: https://jekyllrb.com/docs/collections/

## Configuration

TBD

## Components

TBD

## Layouts

TBD
