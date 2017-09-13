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

The primary "global" navigation (in the site header) is set in [_data/labels.yaml](_data/labels.yaml) in the list starting with `site_nav:`. Check to make sure your links exist, and please don't use too many items in this list. Use relative links that begin at the site root.

Zilker generates the sidebar navigation automatically, with zero configuration.

Pages in subfolders, like `example-folder/parent/child.md`, render as visual children of their parent, e.g. `example-folder/parent.md`. The parent page must exist for the child page to appear in the navigation. If you want a section header without creating an actual parent page, use `layout: redirect` in the section/parent's markdown file and specify where that url should redirect to:

```
layout: redirect
redirect_to: "/example-folder/parent/child"
```

The navigation logic is recursive, and works with deeply nested children, but exceeding two levels is not recommended.

### Collections

Zilker also supports per-section sub-navigation using Jekyll [Collections]. Given a collection named `examplecollection`, each document in [_examplecollection/](_examplecollection/) will include navigation to the other documents in the collection when output.

Sorting and parent-child relationships work the same way in a collection's sub-navigation as in the primary navigation.

[Collections]: https://jekyllrb.com/docs/collections/

## Configuration

TBD

## Components

TBD

## Layouts

TBD
