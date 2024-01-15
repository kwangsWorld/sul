package com.sul.app.community.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sul.app.community.service.CommunityService;
import com.sul.app.community.vo.CommunityVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("community")
@RequiredArgsConstructor
public class CommunityController {

	private final CommunityService service;
	
	//게시글작성
	@PostMapping("insert")
	public Map<String, String> insert(@RequestBody CommunityVo vo, HttpSession session) {
		Map<String, String> map = new HashMap<String, String>();
		int result = service.insert(vo);
		
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");			
		}
		return map;
	}
	
	//게시글 목록 조회
	@GetMapping("list")
	public List<CommunityVo> list() {
		return service.list();
	}
	//게시글 상세조회 (번호)
	@GetMapping("detail")
	public List<CommunityVo>detail() {
		return service.detail();
 	}
	
	//내가 작성한 게시글 보기
	@GetMapping("my")
	public List<CommunityVo> my(){
		return service.my();
	}
	
	//게시글 수정
	@PostMapping("edit")
	public Map<String, Object> edit(@RequestBody CommunityVo vo) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		int result = service.edit(vo);
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");			
		}
		return map;
	}
	
	//게시글 삭제
	@GetMapping("delete")
	public Map<String, Object> delete(@RequestBody CommunityVo vo) throws Exception{
		Map<String, Object> map = new HashMap<String, Object>();
		int result = service.delete(vo);
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");			
		}
		return map;
	}
	
	
}