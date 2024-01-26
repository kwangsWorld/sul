package com.sul.app.community.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.common.PageVo;
import com.sul.app.community.vo.CommunityVo;

import lombok.extern.slf4j.Slf4j;

@Repository
@Slf4j
public class CommunityDao {

	//게시글 작성
	public int insert(SqlSessionTemplate sst, CommunityVo vo) {
		System.out.println(vo);
		return sst.insert("CommunityMapper.insert", vo);
	}

	//목록
	public List<CommunityVo> list(SqlSessionTemplate sst, PageVo vo) {
		return sst.selectList("CommunityMapper.list", vo);
	}

	//상세조회
	public List<CommunityVo> detail(SqlSessionTemplate sst) {
		return sst.selectOne("CommunityMapper.detail");
	}

	//수정
	public int edit(SqlSessionTemplate sst, CommunityVo vo) {
		return sst.update("CommunityMapper.edit", vo);
	}

	//삭제
	public int delete(SqlSessionTemplate sst, CommunityVo vo) {
		return sst.update("CommunityMapper.delete", vo);
	}

	//내가 작성한 글 보기
	public List<CommunityVo> my(SqlSessionTemplate sst, CommunityVo vo) {
		return sst.selectList("CommunityMapper.my", vo);
	}

	public List<CommunityVo> listAll(SqlSessionTemplate sst, PageVo vo) {
		return sst.selectList("CommunityMapper.listAll", vo);
	}
	
	
	

	
}