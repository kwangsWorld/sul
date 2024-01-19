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
import com.sul.app.notice.vo.PageVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("adminNotice")
public class AdminNoticeController {

	private final AdminNoticeService service;

	// 공지사항 목록 조회
	@PostMapping("list")
	public Map<String, Object> list(@RequestBody PageVo vo) {
		
		Map<String,Object> map = new HashMap<String, Object>();
		 //pageNo의 값 바꿔주기 페이지 1에 리스트 10를 불러올거면 (페이지와 리미트를 가지고 조회하는 매퍼 하나)
	      //1페이지 : pageNo = 0, limit = 10
	      //2페이지 : pageNo = 10, limit = 10
	      //3페이지 : pageNo = 20, limit = 10
		int start = (Integer.parseInt(vo.getPageNo())-1)*Integer.parseInt(vo.getLimit());
		vo.setPageNo(Integer.toString(start));
		
		//전체페이지 수 구하기  (전체 리스트를 조회하여 토탈페이지 수를 구하는 매퍼 하나)
	      //리스트가 121개이고 리미트가 10일 경우 13페이지까지 나와야 함
	      //121을 10(리미트)로 나누면 12.1이 나오고 ceil을 사용하여 소수점 올림 == 13

		
		return service.list(vo);
	}

	// 공자시항 상세 조회
	@GetMapping("detail")
	public NoticeVo detail(NoticeVo vo) {
		return service.detail(vo);
	}

	// 공지사항 작성
	@PostMapping("write")
	public Map<String, String> write(@RequestBody NoticeVo vo) throws Exception {
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
