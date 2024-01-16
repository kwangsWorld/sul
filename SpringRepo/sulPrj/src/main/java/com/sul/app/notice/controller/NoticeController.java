package com.sul.app.notice.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
		List<NoticeVo> voList = service.list();
		System.out.println(voList);
		return service.list();
	}

	// 공자시항 상세 조회
	@GetMapping("detail")
	public NoticeVo detail(NoticeVo vo) {
		return service.detail(vo);
	}

	// 조회수 증가
	@PostMapping("increaseHit")
	public Map<String, String> increaseHit(@RequestBody NoticeVo vo) {
		System.out.println(vo);
		Map<String, String> map = new HashMap<String, String>();
		int result = service.increaseHit(vo);

		if (result == 1) {
			map.put("msg", "good");
		} else {
			map.put("msg", "bad");
		}

		return map;
	}

}
