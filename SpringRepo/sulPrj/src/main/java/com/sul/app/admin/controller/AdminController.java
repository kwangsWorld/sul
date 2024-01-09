package com.sul.app.admin.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sul.app.admin.service.AdminService;
import com.sul.app.admin.vo.AdminVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("admin")
public class AdminController {
	
	private final AdminService service;
	
	// 회원가입
	@PostMapping("join")
	public Map<String,String> join(@RequestBody AdminVo vo) throws Exception {
		
		int result = service.join(vo);
		
		Map<String,String> map = new HashMap<String, String>();
		map.put("msg", "good");
		if(result != 1) {
			map.put("msg", "bad");
		}
		return map;
	}
		
	
	// 로그인
	@PostMapping("login")
	public Map<String,Object> login(@RequestBody AdminVo vo) {
		
		AdminVo loginAdmin = service.login(vo);
		
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("msg", "good");
		map.put("loginAdminVo", loginAdmin);
		
		if(loginAdmin == null) {
			map.put("msg", "bad");
		}
		
		return map;
		
	}

}// class
