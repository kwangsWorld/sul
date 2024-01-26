package com.sul.app.community.controller;

import java.io.File;
import java.util.ArrayList;
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

import com.sul.app.common.PageVo;
import com.sul.app.community.service.CommunityService;
import com.sul.app.community.vo.CommunityVo;
import com.sul.app.notice.vo.NoticeVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("community")
@RequiredArgsConstructor
public class CommunityController {

	private final CommunityService service;
	
	//게시글작성
	@PostMapping("insert")
	public Map<String, String> insert(CommunityVo vo, MultipartFile file) throws Exception {
		System.out.println(vo);
		String fullPath = saveFile(file);
		vo.setImg(fullPath);

		int result = service.insert(vo);
		
		Map<String, String> map = new HashMap<String, String>();
		
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
	@PostMapping("list")
	public Map<String, Object> list(@RequestBody PageVo vo) {
		System.out.println("com"+vo);
		Map<String,Object> map = new HashMap<String, Object>();
		int start = (Integer.parseInt(vo.getPageNo())-1)*Integer.parseInt(vo.getLimit()); // 보여줄 시작 인덱스값을 계산 ex) pageNo = 1 -> [0]
		
		vo.setPageNo(Integer.toString(start));
		
		int pageTotal = (int)Math.ceil((double)service.listAll(vo).size()/Integer.parseInt(vo.getLimit()));

		List<CommunityVo> voList = new ArrayList<CommunityVo>();
		
		voList = service.list(vo);
		map.put("pageTotal", pageTotal);
		map.put("voList", voList);
		
		return map;
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