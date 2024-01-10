package com.sul.app.member.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sul.app.member.service.MemberService;
import com.sul.app.member.vo.MemberVo;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("member")
@ResponseBody
@RequiredArgsConstructor
public class MemberController {

	private final MemberService service;
	

	
	//회원가입
	@PostMapping("join")
	public Map<String, String> join(@RequestBody MemberVo vo) throws Exception {
		
		Thread.sleep(3000);
		
		int result = service.join(vo);
		
		Map<String, String> map = new HashMap<String, String>();
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");
			
		}
		return map;
	}
	
	//로그인
	@PostMapping("login")
	public Map<String, Object> login(@RequestBody MemberVo vo) throws Exception {
		
		MemberVo loginMember = service.login(vo);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("msg", "good");
		map.put("loginMemberVo", loginMember);
		if(loginMember == null) {
			map.put("msg", "bad");
		}
		
		return map;
		
	}
	
	//회원정보 수정
	@PostMapping("edit")
	public Map<String, Object> edit(@RequestBody MemberVo vo) throws Exception{
		Map<String, Object> map = new HashMap<String, Object>();
		int result = service.edit(vo);
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");			
		}
		return map;
	}
	
	//회원 탈퇴
	@GetMapping("quit")
	public  Map<String, Object> quit(@RequestBody MemberVo vo) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		int result = service.quit(vo);
		
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");			
		}
		return map;
	}
	
	//회원목록 조회
	@GetMapping("list")
	public List<MemberVo> list() {
		return service.list();
	}
	
	
}