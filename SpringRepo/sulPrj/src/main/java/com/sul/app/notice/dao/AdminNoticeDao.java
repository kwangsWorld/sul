package com.sul.app.notice.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.notice.vo.NoticeVo;
import com.sul.app.notice.vo.PageVo;

@Repository
public class AdminNoticeDao {

	// 공지사항 목록 조회
	public List<NoticeVo> list(SqlSessionTemplate sqlSessionTemplate, PageVo pVo) {
		return sqlSessionTemplate.selectList("AdminNoticeMapper.list", pVo);
	}
	
	// 공자시항 상세 조회
	public NoticeVo detail(SqlSessionTemplate sqlSessionTemplate, NoticeVo vo) {
		return sqlSessionTemplate.selectOne("AdminNoticeMapper.detail" , vo);
	}
	
	// 공지사항 작성
	public int write(SqlSessionTemplate sqlSessionTemplate, NoticeVo vo) {
		return sqlSessionTemplate.insert("AdminNoticeMapper.write", vo);
	}
	
	// 공지사항 수정
	public int edit(SqlSessionTemplate sqlSessionTemplate, NoticeVo vo) {
		return sqlSessionTemplate.update("AdminNoticeMapper.edit", vo);
	}
	
}
