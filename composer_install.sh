composer install
composer require league/flysystem-aws-s3-v3:^1.0
composer require laravel/ui:^3.0
composer require laravel/sanctum:^2.6
# メモリリミットエラーが出たら、以下のコマンドでリミット上限を一時的に外す
# COMPOSER_MEMORY_LIMIT=-1 /usr/bin/composer require パッケージ名