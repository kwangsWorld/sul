package com.sul.app.notice.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.notice.dao.NoticeDao;
import com.sul.app.notice.vo.NoticeVo;
import com.sul.app.notice.vo.PageVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NoticeService {

	private final NoticeDao dao;
	private final SqlSessionTemplate sqlSessionTemplate;

	// 공지사항 목록 조회 (한 페이지 리스트)
	public List<NoticeVo> list(PageVo vo) {
		return dao.list(sqlSessionTemplate, vo);
	}

	// 공지사항 목록 조회 (전체 리스트)
	public List<NoticeVo> listAll(PageVo vo) {
		return dao.listAll(sqlSessionTemplate, vo);
	}

	// 공자시항 상세 조회
	public NoticeVo detail(NoticeVo vo) {
		return dao.detail(sqlSessionTemplate, vo);
	}

	// 조회수 증가
	public int increaseHit(NoticeVo vo) {
		return dao.increaseHit(sqlSessionTemplate, vo);
	}

	// 공지사항 검색 (번호, 제목)
	public List<NoticeVo> search(NoticeVo vo) {
		return dao.search(sqlSessionTemplate, vo);
	}
//	// 공지사항 검색 (번호, 제목)
//	public List<NoticeVo> search(NoticeVo serachData) {
//		return dao.search(sqlSessionTemplate, serachData);
//	}

}
