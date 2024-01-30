package com.sul.app.order.vo;

import lombok.Data;

@Data
public class OrderVo {

	private String orderNo;
	private String memberNo;
	private String no; //productNo
	private String name;
	private String price;
	private String cnt;
	private String image;
	private String quantity;
	private String totalPrice;
	private String enrollDate;
	private String cancleDate;
	private String deliveryStatus;
	private String orderListNo;
	
}
