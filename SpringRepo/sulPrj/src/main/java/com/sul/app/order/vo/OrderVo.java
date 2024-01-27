package com.sul.app.order.vo;

import lombok.Data;

@Data
public class OrderVo {

	private String orderNo;
	private String memberNo;
	private String productNo;
	private String name;
	private String price;
	private String cnt;
	private String totalPrice;
	private String enrollDate;
	private String cancleDate;
	
}
