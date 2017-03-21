# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-zilker"
  spec.version       = "0.0.2"
  spec.authors       = ["Jacob Paul", "City of Austin"]
  spec.email         = ["jacob.paul@austintexas.gov"]

  spec.summary       = %q{A Jekyll theme for City of Austin websites.}
  spec.homepage      = "https://github.com/cityofaustin/zilker-theme"

  spec.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i)
  end

  spec.add_runtime_dependency "jekyll", "~> 3.4"

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end
