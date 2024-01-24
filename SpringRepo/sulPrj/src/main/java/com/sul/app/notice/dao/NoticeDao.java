package com.sul.app.notice.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.notice.vo.NoticeVo;
import com.sul.app.notice.vo.PageVo;

@Repository
public class NoticeDao {

	// 공지사항 목록 조회 (한 페이지 리스트)
	public List<NoticeVo> list(SqlSessionTemplate sqlSessionTemplate, PageVo vo) {
		return sqlSessionTemplate.selectList("NoticeMapper.list", vo);
	}

	// 공지사항 목록 조회 (전체 리스트)
	public List<NoticeVo> listAll(SqlSessionTemplate sqlSessionTemplate, PageVo vo) {
		return sqlSessionTemplate.selectList("NoticeMapper.listAll", vo);
	}

	// 공자시항 상세 조회
	public NoticeVo detail(SqlSessionTemplate sqlSessionTemplate, NoticeVo vo) {
		return sqlSessionTemplate.selectOne("NoticeMapper.detail", vo);
	}

	// 조회수 증가
	public int increaseHit(SqlSessionTemplate sqlSessionTemplate, NoticeVo vo) {
		return sqlSessionTemplate.update("NoticeMapper.increaseHit", vo);
	}

	// 공지사항 검색 (번호, 제목)
	public List<NoticeVo> search(SqlSessionTemplate sqlSessionTemplate, NoticeVo vo) {
		return sqlSessionTemplate.selectList("AdminNoticeMapper.search", vo);
	}
//	// 공지사항 검색 (번호, 제목)
//	public List<NoticeVo> search(SqlSessionTemplate sqlSessionTemplate, NoticeVo serachData) {
//		return sqlSessionTemplate.selectList("AdminNoticeMapper.search", serachData);
//	}
}
