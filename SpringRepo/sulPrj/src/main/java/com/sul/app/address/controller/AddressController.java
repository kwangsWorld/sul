package com.sul.app.address.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
	public String plus(AddressVo vo) throws Exception {
		
		int result = service.plus(vo);
		
		if(result != 1) {
			throw new Exception();
		}
		return "redirect:/home";
	}
	
	//�주소삭제
	@GetMapping("delete")
	public String delete(AddressVo vo, HttpSession session) throws Exception {
		
		int result = service.delete(vo);
		
		if(result != 1) {
			throw new Exception();
		}
			session.removeAttribute("address");
			session.setAttribute("alertMsg", "�ּҰ� ���� �Ǿ����ϴ�.");
			
			return "redirect:/home";
	}
	
	//주소목록 조회
	@GetMapping("list")
	public List<AddressVo> list(){
		return service.list();
	}
}
