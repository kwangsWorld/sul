package com.sul.app.csboard.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sul.app.common.PageVo;
import com.sul.app.csboard.service.CsBoardService;
import com.sul.app.csboard.vo.CsBoardVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("csboard")
public class CsBoardController {
	
	private final CsBoardService service;
	
	// 고객센터 목록 조회
	@PostMapping("list")
	public Map<String, Object> list(@RequestBody PageVo vo) {
		
		Map<String,Object> map = new HashMap<String, Object>();
		
		int start = (Integer.parseInt(vo.getPageNo())-1)*Integer.parseInt(vo.getLimit());
		
		vo.setPageNo(Integer.toString(start));
		
		int pageTotal = (int)Math.ceil((double)service.listAll(vo).size()/Integer.parseInt(vo.getLimit()));
		
		List<CsBoardVo> voList = new ArrayList<CsBoardVo>();
		
		voList = service.list(vo);
		map.put("pageTotal", pageTotal);
		map.put("voList", voList);
		
		return map;
	}
	
	// 고객센터 상세 조회
	@GetMapping("detail")
	public CsBoardVo detail(CsBoardVo vo) {
		System.out.println(vo);
		return service.detail(vo);
	}
	
	// 고객센터 질문 작성
	@PostMapping("question")
	public Map<String,String> question(CsBoardVo vo , MultipartFile file) throws Exception {
		System.out.println(vo);
		System.out.println(file);
		String fullPath = saveFile(file);
		vo.setQImg(fullPath);
		
		int result = service.question(vo);
		
		Map<String,String> map = new HashMap<String, String>();
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");
		}
		return map;
	}
	
	// 질문 이미지 등록
	private String saveFile(MultipartFile file) throws Exception {
		String path = "C:\\sulRepo\\SpringRepo\\sulPrj\\src\\main\\webapp\\resources\\upload\\gallery\\img\\";
		String originName = file.getOriginalFilename();
		
		File target = new File(path + originName);
		
		System.out.println(target.getAbsolutePath());
		
		
		file.transferTo(target);
		
		return path + originName;
	}
	
}
