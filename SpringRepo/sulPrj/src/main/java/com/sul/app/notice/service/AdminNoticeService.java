package com.sul.app.notice.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.notice.dao.AdminNoticeDao;
import com.sul.app.notice.vo.NoticeVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminNoticeService {
	
	private final AdminNoticeDao dao;
	private final SqlSessionTemplate sqlSessionTemplate;
	
	// 공지사항 목록 조회
	public List<NoticeVo> list() {
		return dao.list(sqlSessionTemplate);
	}
	
	// 공자시항 상세 조회
	public NoticeVo detail(String no) {
		return dao.detail(sqlSessionTemplate, no);
	}
	
	// 공지사항 작성
	public int write(NoticeVo vo) throws Exception {
		
		if(vo.getTitle().length() < 4) {
			throw new Exception("제목이 너무 짧습니다.");
		}
		
		return dao.write(sqlSessionTemplate, vo);
	}
	
	// 공지사항 수정
	public int edit(NoticeVo vo) {
		return dao.edit(sqlSessionTemplate, vo);
	}
	
	// 공지사항 삭제
	public int delete(String no) {
		return dao.delete(sqlSessionTemplate, no);
	}

}
