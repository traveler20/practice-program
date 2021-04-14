SELECT *
FROM players
--結合するテーブル名をJOINの後に追加して下さい
JOIN countries
--ONの後に結合条件を追加して下さい
ON players.country_id = countries.id
;