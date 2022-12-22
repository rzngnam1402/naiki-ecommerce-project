CREATE TABLE Shoes (
	ShoesID int GENERATED ALWAYS AS IDENTITY(START WITH 1 INCREMENT BY 1),
	Name VARCHAR(40),
	Brand VARCHAR(20),
	Size VARCHAR(10),
	Color VARCHAR(40),
	Type VARCHAR(10),
	Gender VARCHAR(10),
	Price DECIMAL(10,2),
	Image VARCHAR(100),
	PRIMARY KEY(ShoesID)
);

CREATE TABLE Customer (
	CustomerID INT GENERATED ALWAYS AS IDENTITY(START WITH 1 INCREMENT BY 1),
	Name VARCHAR(40),
	Age INT,
	Gender VARCHAR(10),
	Tel VARCHAR(15),
	Email VARCHAR(40),
	PRIMARY KEY (CustomerID)
);

CREATE TABLE Bill (
	BillID INT GENERATED ALWAYS AS IDENTITY(START WITH 1 INCREMENT BY 1),
	CustomerID INT,
	Date DATE,
	TotalPrice DECIMAL(10,2),
	PRIMARY KEY (BillID),
	FOREIGN KEY(CustomerID) REFERENCES Customer(CustomerID)
);

CREATE TABLE BillDetail (
	BillDetailID INT GENERATED ALWAYS AS IDENTITY(START WITH 1 INCREMENT BY 1),
	BillID INT,
	ShoesID INT,
	Price DECIMAL(10,2),
	Quantity INT,
	PRIMARY KEY (BillDetailID, BillID, ShoesID),
	FOREIGN KEY (BillID) REFERENCES Bill(BillID),
	FOREIGN KEY (ShoesID) REFERENCES Shoes(ShoesID)
);

ALTER TABLE Shoes
ADD COLUMN stripeid varchar(50);

-- SQLINES LICENSE FOR EVALUATION USE ONLY
INSERT INTO Shoes(Name,Brand,Size,Color,Type,Gender,Price,Image) VALUES
('WMN ULTRBOOST 22','Adidas','4, 7','black','sneaker','female','230.00','/images/Adidas/9999202991449_1_8'),
('ULTRABOOST 20 GRAPHIC','Adidas','6, 7','pink','sneaker','female','230.00','/images/Adidas/9999203360336_1_7'),
('ULTRABOOST 22 ELAVATED','Adidas','5, 7','white','sneaker','female','280.00','/images/Adidas/9999203361036_1_7'),
('Streetball II','Adidas','7, 10','blue','sneaker','unisex','140.00','/images/Adidas/9999204575340_1_8'),
('Campus 80s','Adidas','7','black','sneaker','unisex','100.00','/images/Adidas/9999204576149_1_9'),
('Astir','Adidas','4, 6','white','sneaker','female','110.00','/images/Adidas/9999204580658_1_9'),
('Stan Smith Bonega','Adidas','4, 6','white','sneaker','female','110.00','/images/Adidas/9999204580849_1_7'),
('Forum Bonega Mid','Adidas','4, 7','white','sneaker','female','120.00','/images/Adidas/9999204581600_1_6'),
('Top Ten seakers','Adidas','4, 7','white','sneaker','unisex','110.00','/images/Adidas/9999205467767_1_8'),
('Forum Premiere','Adidas','7, 10','white','sneaker','male','200.00','/images/Adidas/9999207721225_1_9'),
('Hicho','Adidas Y-3','4, 5','black','sneaker','unisex','280.00','/images/Adidas Y-3/9999204019547_1_14'),
('4D RUNNER HALO','Adidas Y-3','5','black','sneaker','unisex','400.00','/images/Adidas Y-3/9999204021557_1_15'),
('GR.1P HIGH','Adidas Y-3','4, 6','white','sneaker','unisex','300.00','/images/Adidas Y-3/9999205466531_1_8'),
('White leather Hicho','Adidas Y-3','5, 7','white','sneaker','unisex','280.00','/images/Adidas Y-3/9999205628847_1_1_16'),
('CONVERSE RED SOLE HIGH TOP','Comme des Garcons','8','milky-white','sneaker','unisex','140.00','/images/Comme des Garcons/9999203875267_1'),
('CONVERSE RED SOLE LOW TOP','Comme des Garcons','5, 9','milky-white','sneaker','unisex','140.00','/images/Comme des Garcons/9999203874680_1'),
('CHUCK 70 CANVAS LTD NP','Converse','4, 5','black','sneaker','unisex','140.00','/images/Converse/9999203320620_1_8'),
('Chuck 70 2 in 1 Hi Sneakers','Converse','8, 9','pink','sneaker','unisex','180.00','/images/Converse/9999205501485_1_11'),
('Chuck 70 Utility Hi','Converse','7','blue','sneaker','unisex','140.00','/images/Converse/9999205547865_1'),
('CHUCK 70 SHERPA','Converse','5, 7','white','sneaker','unisex','95.00','/images/Converse/9999202424640_1_5'),
('CHUCK 70 TRANSLUCENT CAGED','Converse','5, 7','white','sneaker','unisex','140.00','/images/Converse/9999202424961_1_8'),
('CHUCK 70 SHERPA LINED','Converse','4, 5','black','sneaker','unisex','110.00','/images/Converse/9999202425227_1_7'),
('CHUCK 70 MULE','Converse','3, 6','black','sneaker','unisex','80.00','/images/Converse/9999203321788_1_8'),
('Air Flight Lite Mid','Nike','6, 11','white','sneaker','unisex','125.00','/images/Nike/9999205164475_1_14'),
('Wmns Dunk Low sneakers','Nike','6','pink','sneaker','female','120.00','/images/Nike/9999203543326_1_10'),
('ACG AIR MADA SNEAKER','Nike','5, 15','dark-milky-white','sneaker','unisex','145.00','/images/Nike/9999205855441_1_20'),
('Air Trainer 1 SP','Nike','10','black','sneaker','unisex','150.00','/images/Nike/9999205853676_1_18'),
('AIR MAX TERRASCAPE 90 NI','Nike','6, 8','white','sneaker','female','150.00','/images/Nike/9999207928068_1_4'),
('ACG Mountain Fly Low GORE-TEX','Nike','5, 9','white','sneaker','unisex','180.00','/images/Nike/9999205852839_1'),
('W AF1 Pixel','Nike','6, 9','black','sneaker','female','120.00','/images/Nike/9999206671392_1'),
('BLAZER LOW 77 JUMBO','Nike','8','white','sneaker','unisex','95.00','/images/Nike/9999207769432_1_3'),
('NIKE AIR HUARACHE','Nike','6, 8','white','sneaker','female','120.00','/images/Nike/9999203540820_1'),
('NIKE CRATER IMPACT','Nike','5, 9','black','sneaker','female','115.00','/images/Nike/9999203536809_1_7'),
('HUARACHE LE','Nike','7','brown','sneaker','unisex','130.00','/images/Nike/9999202298937_1_10'),
('NSW FREE REMASTERED','Nike','6, 11','grey','sneaker','unisex','120.00','/images/Nike/9999202282691_1_13'),
('AIR MAX 95','Nike','7, 12','grey','sneaker','unisex','180.00','/images/Nike/9999202300968_1_11'),
('NIKE AIR HUARACHE 2','Nike','6, 8','white','sneaker','female','120.00','/images/Nike/9999202319878_1_8'),
('AIR MAX TERRASCAPE 90','Nike','6, 8','white','sneaker','female','150.00','/images/Nike/9999205583740_1_7'),
('AIR FORCE 1 BOOT','Nike','8, 11','brown','sneaker','unisex','190.00','/images/Nike/9999202291976_1_8'),
('ACG AIR MOWABB','Nike','4, 8','brown','sneaker','unisex','170.00','/images/Nike/9999205080652_1_17'),
('Air Huarache','Nike','6','white','sneaker','female','130.00','/images/Nike/9999202324285_1_11'),
('WAFFLE TRAINER 2 SD','Nike','8, 11','red','sneaker','unisex','100.00','/images/Nike/9999202287337_1_7'),
('NIKE AIR MAX PRE DAY','Nike','6','white','sneaker','female','130.00','/images/Nike/9999202321345_1_9'),
('WAFFLE TRAINER 2','Nike','8, 10','black','sneaker','unisex','90.00','/images/Nike/9999203536601_1_8'),
('BE-DO-WIN SP','Nike','5, 10','black','sneaker','unisex','130.00','/images/Nike/9999205118447_1'),
('NIKE AIR FORCE ONE STRAPLESS','Nike','6','white','sneaker','female','120.00','/images/Nike/9999202314620_1_10'),
('OFFLINE PACK','Nike','7, 11','grey','sneaker','unisex','125.00','/images/Nike/9999204620958_1_10'),
('NIKE AIR VAPORMAX 2021 FK','Nike','12','white','sneaker','female','220.00','/images/Nike/9999202315252_1_12'),
('NSW FREE REMASTERED','Nike','6, 11','brown','sneaker','unisex','120.00','/images/Nike/9999202282936_1_10'),
('NIKE ZOOM AIR FIRE','Nike','9','white','sneaker','female','115.00','/images/Nike/9999203537233_1_6'),
('W AIR FORCE 1 07 LOW NH NN','Nike','6, 9','white','sneaker','female','130.00','/images/Nike/9999203544163_1_10'),
('Dunk Low Se','Nike','6, 8','white','sneaker','female','110.00','/images/Nike/9999202317560_1_10'),
('Air Max 95 Se','Nike','9, 10','blue','sneaker','unisex','180.00','/images/Nike/9999202297190_1_9'),
('Nike Free Run Trail','Nike','7','grey','sneaker','male','120.00','/images/Nike/9999205426016_1_29');

 UPDATE shoes SET stripeid = 'price_1LhSfjHbWieXXAGk4hrGmzgS' WHERE shoesid = 53;
 UPDATE shoes SET stripeid = 'price_1LhSf0HbWieXXAGkkfXf9eXn' WHERE shoesid = 52;
 UPDATE shoes SET stripeid = 'price_1LhSeIHbWieXXAGkMvDs0UIP' WHERE shoesid = 51;
 UPDATE shoes SET stripeid = 'price_1LhSceHbWieXXAGk5GC0lQZa' WHERE shoesid = 50;
 UPDATE shoes SET stripeid = 'price_1LhSbiHbWieXXAGkpDATNu0H' WHERE shoesid = 49;
 UPDATE shoes SET stripeid = 'price_1LhSa7HbWieXXAGkeNyrOk3m' WHERE shoesid = 48;
 UPDATE shoes SET stripeid = 'price_1LhPZcHbWieXXAGk5AfmY2pS' WHERE shoesid = 47;
 UPDATE shoes SET stripeid = 'price_1LhSZCHbWieXXAGkXK5Ijpo9' WHERE shoesid = 46;
 UPDATE shoes SET stripeid = 'price_1LhSYKHbWieXXAGkfLQ8RSDK' WHERE shoesid = 45;
 UPDATE shoes SET stripeid = 'price_1LhSXcHbWieXXAGkxPLdjgee' WHERE shoesid = 44;
 UPDATE shoes SET stripeid = 'price_1LhSWxHbWieXXAGkusd23Amm' WHERE shoesid = 43;
 UPDATE shoes SET stripeid = 'price_1LhSWEHbWieXXAGkEyyc7wun' WHERE shoesid = 42;
 UPDATE shoes SET stripeid = 'price_1LhSVfHbWieXXAGkW1PsILvv' WHERE shoesid = 41;
 UPDATE shoes SET stripeid = 'price_1LhSUzHbWieXXAGk1AumK4O5' WHERE shoesid = 40;
 UPDATE shoes SET stripeid = 'price_1LhSUEHbWieXXAGkhWPGuCIs' WHERE shoesid = 39;
 UPDATE shoes SET stripeid = 'price_1LhSTdHbWieXXAGkS2WsoXap' WHERE shoesid = 38;
 UPDATE shoes SET stripeid = 'price_1LhSSrHbWieXXAGkYh2GaaOD' WHERE shoesid = 37;
 UPDATE shoes SET stripeid = 'price_1LhSSCHbWieXXAGk4Pm7yjp7' WHERE shoesid = 36;
 UPDATE shoes SET stripeid = 'price_1LhSRUHbWieXXAGkg3FDPSuf' WHERE shoesid = 35;
 UPDATE shoes SET stripeid = 'price_1LhSQmHbWieXXAGkSGIn6JBx' WHERE shoesid = 34;
 UPDATE shoes SET stripeid = 'price_1LhSPyHbWieXXAGkEnZ7Gz2e' WHERE shoesid = 33;
 UPDATE shoes SET stripeid = 'price_1LhSPGHbWieXXAGkZg0VHwXo' WHERE shoesid = 32;
 UPDATE shoes SET stripeid = 'price_1LhSNdHbWieXXAGk3qIliaby' WHERE shoesid = 31;
 UPDATE shoes SET stripeid = 'price_1LhSMzHbWieXXAGkztsJhgAe' WHERE shoesid = 30;
 UPDATE shoes SET stripeid = 'price_1LhSM8HbWieXXAGk72f06diV' WHERE shoesid = 29;
 UPDATE shoes SET stripeid = 'price_1LhSL9HbWieXXAGkiIFpDYuI' WHERE shoesid = 28;
 UPDATE shoes SET stripeid = 'price_1LhSKAHbWieXXAGkXOiL4gIu' WHERE shoesid = 27;
 UPDATE shoes SET stripeid = 'price_1LhSJKHbWieXXAGkuyGexpBW' WHERE shoesid = 26;
 UPDATE shoes SET stripeid = 'price_1LhSIaHbWieXXAGk59WE11QC' WHERE shoesid = 25;
 UPDATE shoes SET stripeid = 'price_1LhSHfHbWieXXAGkhbNTGnwh' WHERE shoesid = 24;
 UPDATE shoes SET stripeid = 'price_1LhSGCHbWieXXAGkbF9uiFpE' WHERE shoesid = 23;
 UPDATE shoes SET stripeid = 'price_1LhSFQHbWieXXAGk6XpW6oOl' WHERE shoesid = 22;
 UPDATE shoes SET stripeid = 'price_1LhSDhHbWieXXAGkG8N6fJkV' WHERE shoesid = 21;
 UPDATE shoes SET stripeid = 'price_1LhSCiHbWieXXAGkocwmAqME' WHERE shoesid = 20;
 UPDATE shoes SET stripeid = 'price_1LhS9BHbWieXXAGkuRC6Lmtj' WHERE shoesid = 19;
 UPDATE shoes SET stripeid = 'price_1LhS8RHbWieXXAGkGQbqVB28' WHERE shoesid = 18;
 UPDATE shoes SET stripeid = 'price_1LhS7cHbWieXXAGkBWOD8MhK' WHERE shoesid = 17;
 UPDATE shoes SET stripeid = 'price_1LhS6UHbWieXXAGkvA7EDXRP' WHERE shoesid = 16;
 UPDATE shoes SET stripeid = 'price_1LhS5nHbWieXXAGkdfp36JjM' WHERE shoesid = 15;
 UPDATE shoes SET stripeid = 'price_1LhS4hHbWieXXAGkI59SMRfT' WHERE shoesid = 14;
 UPDATE shoes SET stripeid = 'price_1LhS44HbWieXXAGkDqRdgLxX' WHERE shoesid = 13;
 UPDATE shoes SET stripeid = 'price_1LhS3MHbWieXXAGkmHAnMHuW' WHERE shoesid = 12;
 UPDATE shoes SET stripeid = 'price_1LhS2eHbWieXXAGkAoGdKewQ' WHERE shoesid = 11;
 UPDATE shoes SET stripeid = 'price_1LhS1RHbWieXXAGkz4RfYFW4' WHERE shoesid = 10;
 UPDATE shoes SET stripeid = 'price_1LhS0HHbWieXXAGk33bSS4m8' WHERE shoesid = 9;
 UPDATE shoes SET stripeid = 'price_1LhRyCHbWieXXAGkyqGlgL43' WHERE shoesid = 8;
 UPDATE shoes SET stripeid = 'price_1LhRxQHbWieXXAGk3et3uR1f' WHERE shoesid = 7;
 UPDATE shoes SET stripeid = 'price_1LhRwbHbWieXXAGknPlTENSJ' WHERE shoesid = 6;
 UPDATE shoes SET stripeid = 'price_1LhRvnHbWieXXAGkbfovU85Z' WHERE shoesid = 5;
 UPDATE shoes SET stripeid = 'price_1LhRp8HbWieXXAGkI8JOtkXl' WHERE shoesid = 4;
 UPDATE shoes SET stripeid = 'price_1LhRoVHbWieXXAGkjprqslPt' WHERE shoesid = 3;
 UPDATE shoes SET stripeid = 'price_1LhRntHbWieXXAGkEgj7peqa' WHERE shoesid = 2;
 UPDATE shoes SET stripeid = 'price_1LhRnDHbWieXXAGkCpP5WFOK' WHERE shoesid = 1;
 


 


