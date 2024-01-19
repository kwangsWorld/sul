package com.sul.app.address.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sul.app.address.service.AddressService;
import com.sul.app.address.vo.AddressVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("address")
@RequiredArgsConstructor
public class AddressController {

	private final AddressService service;
	
	//주소추가
	@PostMapping("plus")
	public Map<String, String> plus(@RequestBody AddressVo vo, HttpSession session) throws Exception {
		Map<String, String> map = new HashMap<String, String>();
		int result = service.plus(vo);
		
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");			
		}
		return map;
	}
	
	//기본배송지 설정
	@PostMapping("selectBasicAdrress")
	public int selectBasicAdrress() {
		return 0;
	}
	
	//주소삭제
	@GetMapping("delete")
	public Map<String, Object> delete(@RequestBody AddressVo vo) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		int result = service.delete(vo);
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");			
		}
		return map;
	}
	
	//주소목록 조회
	@PostMapping("list")
	public List<AddressVo> list(@RequestBody AddressVo vo){
		return service.list(vo);
	}
}
