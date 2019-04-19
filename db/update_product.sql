update product
set img = $1,
		name = $2,
		price = $3
where id = $4;