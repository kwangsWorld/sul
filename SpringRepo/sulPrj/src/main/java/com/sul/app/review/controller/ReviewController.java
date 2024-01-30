package com.sul.app.review.controller;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sul.app.review.service.ReviewService;
import com.sul.app.review.vo.ReviewVo;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("review")
@RequiredArgsConstructor
@Slf4j
public class ReviewController {

	private final ReviewService service;
	
	// 작성하기 (회원)
	@PostMapping("write")
	public Map<String, String> write( ReviewVo vo, MultipartFile file) throws Exception {
		
		String fullPath = saveFile(file);
		vo.setImg(fullPath);

		int result = service.write(vo);
		Map<String, String> map = new HashMap<String, String>();
		
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "good");			
		}
		return map;
	}

	//리뷰작성 이미지 등록
	private String saveFile(MultipartFile file) throws Exception {
		String path = "C:\\sulRepo\\SpringRepo\\sulPrj\\src\\main\\webapp\\resources\\upload\\gallery\\img\\";
		String originName = file.getOriginalFilename();
		
		File target = new File(path + originName);
		
		file.transferTo(target);
		
		return path + originName;
	}
	
	   // 리뷰 조회 (회원)
	   @PostMapping("list")
	   public List<ReviewVo> write(@RequestBody String memberNo){
	      
	      System.out.println("num : " + memberNo);
	      
	      List<ReviewVo> voList = service.memberList(memberNo);
	      
	      System.out.println("쿼리갔다온 voList값?" + voList);
	      
	      return voList;
	   }
	   
	
}
