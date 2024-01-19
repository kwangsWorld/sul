package com.sul.app.notice.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sul.app.notice.service.AdminNoticeService;
import com.sul.app.notice.vo.NoticeVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("adminNotice")
public class AdminNoticeController {

	private final AdminNoticeService service;

	// 공지사항 목록 조회
	@GetMapping("list")
	public List<NoticeVo> list() {
		return service.list();
	}

	// 공자시항 상세 조회
	@GetMapping("detail")
	public NoticeVo detail(NoticeVo vo) {
		return service.detail(vo);
	}

	// 공지사항 작성
	@PostMapping("write")
	public Map<String, String> write(@RequestBody NoticeVo vo) throws Exception {
System.out.println(vo);
		Map<String, String> map = new HashMap<String, String>();
		int result = service.write(vo);

		if (result == 1) {
			map.put("msg", "good");
		} else {
			map.put("msg", "bad");
		}
		System.out.println(vo);
		return map;
	}

	// 공지사항 수정
	@PostMapping("edit")
	public Map<String, String> edit(@RequestBody NoticeVo vo) {

		Map<String, String> map = new HashMap<String, String>();
		int result = service.edit(vo);
		if (result == 1) {
			map.put("msg", "good");
		} else {
			map.put("msg", "bad");
		}
		return map;
	}
	
}
