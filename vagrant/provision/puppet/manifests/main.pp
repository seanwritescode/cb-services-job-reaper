class { 'nodejs':
  version => 'stable',
}

package { 'kue':
  provider => 'npm',
  require  => Class['nodejs']
}

class { 'redis': }
