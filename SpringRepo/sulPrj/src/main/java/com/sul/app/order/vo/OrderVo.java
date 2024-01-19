package com.sul.app.order.vo;

import lombok.Data;

@Data
public class OrderVo {

	private String orderNo;
	private String orderDate;
	private String quantity;
	private String memberNo;
	private String name;
	private String deliveryStatus;
	private String delYn;
	
}
