package com.sul.app.notice.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sul.app.notice.service.NoticeService;
import com.sul.app.notice.vo.NoticeVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("notice")
public class NoticeController {

	private final NoticeService service;

	// 공지사항 목록 조회
	@GetMapping("list")
	public List<NoticeVo> list() {
		return service.list();
	}

	// 공자시항 상세 조회
	@GetMapping("detail")
	public NoticeVo detail(String no) {
		return service.detail(no);
	}

	// 조회수 증가
	@GetMapping("increaseHit")
	public Map<String, String> increaseHit(@RequestBody String no) {

		Map<String, String> map = new HashMap<String, String>();
		int result = service.increaseHit(no);

		if (result == 1) {
			map.put("msg", "good");
		} else {
			map.put("msg", "bad");
		}

		return map;
	}

}
