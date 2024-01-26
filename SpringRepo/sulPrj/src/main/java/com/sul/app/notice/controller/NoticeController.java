package com.sul.app.notice.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sul.app.common.PageVo;
import com.sul.app.notice.service.NoticeService;
import com.sul.app.notice.vo.NoticeVo;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@RequestMapping("notice")
@Slf4j
public class NoticeController {

	private final NoticeService service;

	// 공지사항 목록 조회 (검색기능 + 페이징기능)
	@PostMapping("list")
	public Map<String, Object> list(@RequestBody PageVo vo) {
		
		Map<String, Object> map = new HashMap<String, Object>();

		int start = (Integer.parseInt(vo.getPageNo()) - 1) * Integer.parseInt(vo.getLimit());

		vo.setPageNo(Integer.toString(start));

		int pageTotal = (int) Math.ceil((double) service.listAll(vo).size() / Integer.parseInt(vo.getLimit()));

		List<NoticeVo> voList = new ArrayList<NoticeVo>();

		voList = service.list(vo);
		map.put("pageTotal", pageTotal);
		map.put("voList", voList);
		
		return map;
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
