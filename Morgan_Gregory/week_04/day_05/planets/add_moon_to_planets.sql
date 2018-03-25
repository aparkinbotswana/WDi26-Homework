-- ALTER TABLE moons ADD COLUMN planet_id INTEGER;
-- ALTER TABLE planets ADD COLUMN period INTEGER;
-- ALTER TABLE planets ADD COLUMN period2 REAL;
-- ALTER TABLE planets ADD COLUMN clip INTEGER;
ALTER TABLE moons ADD COLUMN clip INTEGER;

-- all these below didn't work trying to change column data type:
-- ALTER TABLE planets UPDATE COLUMN period DECIMAL;
-- ALTER TABLE planets
-- ALTER COLUMN period DECIMAL;
-- ALTER TABLE planets MODIFY COLUMN period DECIMAL;
-- ALTER TABLE planets
-- MODIFY COLUMN period DECIMAL;
-- ALTER TABLE planets
-- MODIFY period DECIMAL;
