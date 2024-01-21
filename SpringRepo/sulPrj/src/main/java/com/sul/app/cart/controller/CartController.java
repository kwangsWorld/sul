package com.sul.app.cart.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.sul.app.cart.service.CartService;
import com.sul.app.product.vo.ProductVo;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("cart")
@RequiredArgsConstructor
public class CartController {
	
	private final CartService service;

	//장바구니 담기
	@PostMapping("add")
	public Map<String, String> add(@RequestBody ProductVo vo){
		
//		System.out.println("리액트에서 받아온 장바구니 추가 vo : " + vo);
		
		Map<String, String> map = new HashMap<String, String>();
		int result = service.add(vo);
		
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");
		}
		
		return map;
	}
	
	//장바구니 조회
	@GetMapping("list")
	public List<ProductVo> list(){
		
		List<ProductVo> voList = service.list();
		
		System.out.println("쿼리문 이후 voList: " + voList);
		
		return voList;
	}
	
	//장바구니 결제
//	public List<ProductVo> cartBuy(List<ProductVo> voList){
//	
//		
//	}
	
}
