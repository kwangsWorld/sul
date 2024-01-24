package com.sul.app.community.controller;

import java.io.File;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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
	public Map<String, String> insert(CommunityVo vo, HttpSession session, MultipartFile file) throws Exception {
		String fullPath = saveFile(file);
		vo.setImg(fullPath);
		
		Map<String, String> map = new HashMap<String, String>();
		
		int result = service.insert(vo);
		
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");			
		}
		return map;
	}
	
	//커뮤니티 이미지 등록
	private String saveFile(MultipartFile file) throws Exception {
		String path = "C:\\sulRepo\\SpringRepo\\sulPrj\\src\\main\\webapp\\resources\\upload\\gallery\\img\\";
		String originName = file.getOriginalFilename();
		
		File target = new File(path + originName);
		
		file.transferTo(target);
		
		return path + originName;
	}

	//게시글 목록 조회
	@GetMapping("list")
	public List<CommunityVo> list() {
		return service.list();
	}
	//게시글 상세조회
	@GetMapping("detail")
	public List<CommunityVo>detail() {
		return service.detail();
 	}
	
	//내가 작성한 게시글 보기
	@PostMapping("my")
	public List<CommunityVo> my(@RequestBody CommunityVo vo){
		return service.my(vo);
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
	@PostMapping("delete")
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