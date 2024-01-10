package com.sul.app.review.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.sul.app.review.service.ReviewService;
import com.sul.app.review.vo.ReviewVo;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("review")
@RequiredArgsConstructor
public class ReviewController {

	private final ReviewService service;
	
	
	//작성하기
	@PostMapping("write")
	public Map<String, String> write(@RequestBody ReviewVo vo, HttpSession session) throws Exception {
		Map<String, String> map = new HashMap<String, String>();
		int result = service.write(vo);
		
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "good");			
		}
		return map;
	}
}
