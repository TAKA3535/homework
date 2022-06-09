CREATE TABLE `homework.todos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '',
  `information` text,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `homework.todos` (
  `id`,
  `name`,
  `information`
) VALUES
  (1, 'hajime takeuchi', 'super hoge master'),
  (2, 'kou matsumoto', '日本妖怪怪異辞典を買う'),
  (3, 'masato sasho', 'ORANGE RANGE21周年ライブに行く'),
  (4, 'takumi koyama', 'スーパーイケメンボーイ'),
  (5, 'yasuo kouzai', '最近パソコン買い換えた'),
  (6, 'takahiro mori', 'MacBook Air買う')
;