package com.sul.app.buy.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.sul.app.buy.service.BuyService;
import com.sul.app.member.vo.MemberVo;
import com.sul.app.product.vo.ProductVo;

import lombok.RequiredArgsConstructor;


@Controller
@RequestMapping("buy")
@RequiredArgsConstructor
public class BuyController {
	
	private final BuyService service;

	//구매하기 -> 점검 필요
	@PostMapping
	public Map<String, String> buy(ProductVo vo) {
		
		Map<String, String> map = new HashMap<String, String>();
		int result = service.buy(vo);
		
		if(result == 1) {
			map.put("msg","good");
		}else {
			map.put("msg", "bad");
		}
		return map;
	}
	
	//구매 목록 조회
	@GetMapping("list")
	public List<ProductVo> buyList(ProductVo vo) {
		
		List<ProductVo> voList = service.buyList(vo);
		
		return voList;
	}
	
	//배송지 정보 조회
	@GetMapping("address")
	public MemberVo buyLoadAddress(MemberVo vo) {
		return service.buyLoadAddress(vo);
	}
	

}
