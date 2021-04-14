-- WHEREに条件を付け足し、character_nameがにんじゃわんこであるデータを取得し、
-- グループ化してください

SELECT SUM(price), purchased_at
FROM purchases
WHERE character_name = "にんじゃわんこ"
GROUP BY purchased_at;