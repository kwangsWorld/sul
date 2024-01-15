package com.sul.app.member.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sul.app.member.service.AdminMemberService;
import com.sul.app.member.vo.MemberVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("adminMember")
@RequiredArgsConstructor
public class AdminMemberController {

	private final AdminMemberService service;
	
	// 회원 목록 조회
	@GetMapping("list")
	public List<MemberVo> list() {
		return service.list();
	}
	
	// 회원 목록 상세 조회
	@GetMapping("detail")
	public MemberVo detail(MemberVo vo) {
		return service.detail(vo);
	}
	
	// 회원 삭제
	@PostMapping("delete")
	public Map<String,String> delete(@RequestBody MemberVo vo) {
		Map<String,String> map = new HashMap<String, String>();
		int result = service.delete(vo);
		
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");
		}
		return map;
	}
	
	
}