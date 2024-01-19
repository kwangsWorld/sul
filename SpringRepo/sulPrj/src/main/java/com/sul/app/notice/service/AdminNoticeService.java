package com.sul.app.notice.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.notice.dao.AdminNoticeDao;
import com.sul.app.notice.vo.NoticeVo;
import com.sul.app.notice.vo.PageVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminNoticeService {

	private final AdminNoticeDao dao;
	private final SqlSessionTemplate sqlSessionTemplate;

	// 공지사항 목록 조회
	public List<NoticeVo> list(PageVo vo) {
		return dao.list(sqlSessionTemplate , vo);
	}

	// 공자시항 상세 조회
	public NoticeVo detail(NoticeVo vo) {
		return dao.detail(sqlSessionTemplate, vo);
	}

	// 공지사항 작성
	public int write(NoticeVo vo) throws Exception {

		if (vo.getTitle().length() < 4) {
			throw new Exception("제목이 너무 짧습니다.");
		}

		return dao.write(sqlSessionTemplate, vo);
	}

	// 공지사항 수정
	public int edit(NoticeVo vo) {
		return dao.edit(sqlSessionTemplate, vo);
	}

//	// 페이징
//	public List<NoticeVo> list(SqlSessionTemplate sqlSessionTemplate, PageVo pvo) {
//		int offset = (pvo.getCurrentPage() - 1) * pvo.getBoardLimit();
//		int limit = pvo.getBoardLimit();
//		RowBounds rb = new RowBounds(offset, limit);
//	}
}




