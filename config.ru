use Rack::Static,
  :urls => ["/assets"],
  :root => "public"


map '/' do
    run lambda { |env|
      [
        200,
        {
          'Content-Type'  => 'text/html',
          'Cache-Control' => 'public, max-age=1800'
        },
        File.open('public/index.html', File::RDONLY)
      ]
    }
end

map '/about.html' do
    run lambda { |env|
      [
        200,
        {
          'Content-Type'  => 'text/html',
          'Cache-Control' => 'public, max-age=1800'
        },
        File.open('public/about.html', File::RDONLY)
      ]
    }
end

map '/other.html' do
    run lambda { |env|
      [
        200,
        {
          'Content-Type'  => 'text/html',
          'Cache-Control' => 'public, max-age=1800'
        },
        File.open('public/other.html', File::RDONLY)
      ]
    }
end

map '/xltt-1.html' do
    run lambda { |env|
      [
        200,
        {
          'Content-Type'  => 'text/html',
          'Cache-Control' => 'public, max-age=1800'
        },
        File.open('public/xltt-1.html', File::RDONLY)
      ]
    }
end

map '/xltt-2.html' do
    run lambda { |env|
      [
        200,
        {
          'Content-Type'  => 'text/html',
          'Cache-Control' => 'public, max-age=300'
        },
        File.open('public/xltt-2.html', File::RDONLY)
      ]
    }
end
