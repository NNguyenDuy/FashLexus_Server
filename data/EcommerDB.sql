-- Bảng lưu thông tin danh mục 1
CREATE TABLE Category(
  Category_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Name VARCHAR(255) NOT NULL,
  Category_path VARCHAR(255) NOT NULL,
  Description VARCHAR(255),
  Status INT NOT NULL,
  Image VARCHAR(255)
);
-- Bảng lưu thông tin sản phẩm 2
CREATE TABLE Product(
  Product_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Category_id INT NOT NULL,
  Name VARCHAR(255) NOT NULL,
  Description VARCHAR(255) NOT NULL,
  Images LONGTEXT NOT NULL,
  Price DECIMAL(8, 2) NOT NULL,
  Discount DECIMAL(8, 2),
  Quantity INT NOT NULL,
  Sold INT,
  Status INT NOT NULL,
  FOREIGN KEY (Category_id) REFERENCES Category(Category_id)
);
-- Bảng liên kết sản phẩm với tài nguyên 3
CREATE TABLE Product_assest(
  Product_assest_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Product_id INT NOT NULL,
  Product_assest_path VARCHAR(255) NOT NULL,
  Type VARCHAR(255),
  FOREIGN KEY (Product_id) REFERENCES Product(Product_id)
);
-- Bảng lưu thông tin ưu đãi (coupon) 4
CREATE TABLE Coupon(
  Coupon_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Coupon_code VARCHAR(255) NOT NULL,
  Coupon_start_date DATETIME NOT NULL,
  Coupon_end_date DATETIME NOT NULL,
  Coupon_min_spend DECIMAL(8, 2) NOT NULL,
  Coupon_max_spend DECIMAL(8, 2) NOT NULL,
  Coupon_uses_per_customer INT NOT NULL,
  Coupon_uses_per_coupon INT NOT NULL,
  Coupon_status ENUM('active', 'expired') NOT NULL,
  Created_at DATETIME NOT NULL,
  Updated_at DATETIME NOT NULL,
  Deleted_at DATETIME
);
-- Bảng lưu thông tin người dùng 5
CREATE TABLE User(
  User_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Username VARCHAR(255) NOT NULL,
  Password VARCHAR(255) NOT NULL,
  Gmail VARCHAR(255) NOT NULL,
  Phone_number VARCHAR(255) NOT NULL,
  Full_name VARCHAR(255) NOT NULL,
  Address VARCHAR(255) NOT NULL
);
-- Bảng lưu thông tin về vai trò người dùng 6
CREATE TABLE Role(
  Role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Role_name VARCHAR(255) NOT NULL COMMENT 'Admin - Sales Staff - Delivery Staff - Registered Users',
  Description VARCHAR(255) NOT NULL,
  Status INT NOT NULL
);
-- Bảng liên kết người dùng với vai trò 7
CREATE TABLE Shop_user_role(
  User_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Role_id INT NOT NULL,
  FOREIGN KEY (User_id) REFERENCES User(User_id),
  FOREIGN KEY (Role_id) REFERENCES Role(Role_id)
);
-- Bảng lưu thông tin menu của cửa hàng 8
CREATE TABLE Shop_menu(
  Menu_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Path VARCHAR(255) NOT NULL,
  Description VARCHAR(255) NOT NULL
);
-- Bảng liên kết vai trò với menu 9
CREATE TABLE Shop_menu_role(
  Role_id INT NOT NULL,
  Menu_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  FOREIGN KEY (Role_id) REFERENCES Role(Role_id),
  FOREIGN KEY (Menu_id) REFERENCES Shop_menu(Menu_id)
);
-- Bảng lưu thông tin đơn hàng 10
CREATE TABLE Orders(
  Order_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  User_id INT NOT NULL,
  Coupon_id INT NOT NULL,
  Status VARCHAR(255) NOT NULL,
  Shipping_fee DECIMAL(8, 2) NOT NULL,
  Total DECIMAL(8, 2) NOT NULL,
  Created_at DATETIME NOT NULL,
  Canceled_at DATETIME NOT NULL,
  Completed_at DATETIME NOT NULL,
  Delivery_at DATETIME NOT NULL,
  FOREIGN KEY (User_id) REFERENCES User(User_id),
  FOREIGN KEY (Coupon_id) REFERENCES Coupon(Coupon_id)
);
-- Bảng lưu thông tin chi tiết đơn hàng 11
CREATE TABLE Order_item(
  Order_item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Product_id INT NOT NULL,
  Order_id INT NOT NULL,
  Name VARCHAR(255) NOT NULL,
  Quantity INT NOT NULL,
  Price DECIMAL(8, 2) NOT NULL,
  Created_at DATETIME NOT NULL,
  Updated_at DATETIME NOT NULL,
  Deleted_at DATETIME NOT NULL,
  FOREIGN KEY (Product_id) REFERENCES Product(Product_id),
  FOREIGN KEY (Order_id) REFERENCES Orders(Order_id)
);
-- Bảng lưu thông tin giỏ hàng của người dùng 12
CREATE TABLE Cart(
  Cart_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  User_id INT NOT NULL,
  Created_at DATETIME NOT NULL,
  Updated_at DATETIME NOT NULL,
  FOREIGN KEY (User_id) REFERENCES User(User_id)
);
-- Bảng lưu thông tin sản phẩm trong giỏ hàng 13
CREATE TABLE Cart_item(
  Cart_item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Product_id INT NOT NULL,
  Cart_id INT NOT NULL,
  Quantity INT NOT NULL,
  Price DECIMAL(8, 2) NOT NULL,
  Created_at DATETIME NOT NULL,
  Updated_at DATETIME NOT NULL,
  FOREIGN KEY (Product_id) REFERENCES Product(Product_id),
  FOREIGN KEY (Cart_id) REFERENCES Cart(Cart_id)
);
-- Bảng lưu thông tin thanh toán 14
CREATE TABLE Payment (
  Payment_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Order_id INT NOT NULL,
  Amount DECIMAL(8, 2) NOT NULL,
  Payment_method VARCHAR(255) NOT NULL,
  Payment_status VARCHAR(255) NOT NULL,
  Created_at DATETIME NOT NULL,
  Updated_at DATETIME NOT NULL,
  FOREIGN KEY (Order_id) REFERENCES Orders(Order_id)
);
-- Bảng lưu đánh giá của người dùng về sản phẩm 15
CREATE TABLE Review(
  Review_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  User_id INT NOT NULL,
  Product_id INT NOT NULL,
  Rating INT NOT NULL,
  Title VARCHAR(255) NOT NULL,
  Content TEXT NOT NULL,
  Created_at DATETIME NOT NULL,
  Updated_at DATETIME NOT NULL,
  FOREIGN KEY (User_id) REFERENCES User(User_id),
  FOREIGN KEY (Product_id) REFERENCES Product(Product_id)
);