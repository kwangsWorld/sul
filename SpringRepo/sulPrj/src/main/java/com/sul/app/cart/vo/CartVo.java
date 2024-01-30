package com.sul.app.cart.vo;

import lombok.Data;

@Data
public class CartVo {
	
	private String cartNo;
	private String memberNo;
	private String productNo;
	private String name;
	private String price;
	private String capacity;
	private String cnt;
//	private String[] deleteList;

}