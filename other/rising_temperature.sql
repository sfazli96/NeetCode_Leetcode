SELECT temp1.id
FROM Weather temp1
JOIN Weather t2 ON temp1.recordDate = DATE_ADD(t2.recordDate, INTERVAL 1 DAY)
where temp1.temperature > t2.temperature
